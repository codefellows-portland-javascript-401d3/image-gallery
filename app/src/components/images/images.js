import template from './images.html';
import styles from './images.scss';

export default {
  template,
  bindings: {
    albumListId: '<',
    display: '<'
  },
  controller
};


controller.$inject = ['imageService', '$state', '$timeout'];
function controller (imageService, $state, $timeout) {
  this.styles = styles;
  this.addButton = 'add';
  this.count = 0;

  this.albumName = $state.params.albumName;
  this.albumListId = $state.params.albumId;

  imageService.getByAlbum(this.albumListId)
    .then(images => {
      this.images = images;
      if (this.images.length) this.images[0].current = true;
    })
    .catch(err => console.log(err));

  this.uiOnParamsChanged = params => {
    this.display = params.display;
  };

  this.add = imageToAdd => {
    imageService.add(this.albumListId, imageToAdd)
      .then(addedImage => {
        this.images.unshift(addedImage);
        this.addButton = 'add';
      })
      .catch(err => console.log(err));
  };

  this.vote = (voteImage, vote) => {
    imageService.vote(voteImage, vote)
      .then(updatedImage => {
        const index = this.images.findIndex(img => img._id === updatedImage._id);
        if (index > -1) {
          this.images.splice(index, 1, updatedImage);
          this.images[this.count].current = true;
        }
      })
      .catch(err => console.log(err));
  };

  //this method is not used yet, but will be when user roles are incorporated
  this.remove = imageToRemove => {
    imageService.remove(imageToRemove)
      .then(removedImage => {
        const index = this.images.findIndex(img => img._id === removedImage._id);
        if (index > -1) {
          this.images.splice(index, 1);
        }
      })
      .catch(err => console.log(err));
  };

  this.resetCurrent = () => {
    this.images.forEach(e => {
      e.current = false;
    });
  };

  this.next = () => {
    if (this.count < this.images.length - 1) {
      this.count++;
      this.resetCurrent();
      this.images[this.count].current = true;
    } else {
      this.count = 0;
      this.resetCurrent();
      if(this.images.length) this.images[this.count].current = true;
    }
  };

  this.last = () => {
    if (this.count > 0) {
      this.count--;
      this.resetCurrent();
      this.images[this.count].current = true;
    } else {
      this.count = this.images.length - 1;
      this.resetCurrent();
      this.images[this.count].current = true;
    }
  };

  //just playing around with using timeout for slideshow loop
  this.timer = null;
  this.slideTimer = () => {
    this.timer = $timeout(() => {
      this.next();
      this.timer = $timeout(this.slideTimer, 500);
    }, 3000);
  };

  this.slideTimer();

};
