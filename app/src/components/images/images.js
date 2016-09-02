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


controller.$inject = ['imageService', '$state'];
function controller (imageService, $state) {
  this.styles = styles;
  // this.view = 'list';
  this.addButton = 'add';

  this.albumName = $state.params.albumName;
  this.albumListId = $state.params.albumId;

  imageService.getByAlbum(this.albumListId)
    .then(images => this.images = images)
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

};
