import template from './images.html';
import styles from './images.scss';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];
function controller (imageService) {
  this.styles = styles;
  this.view = 'list';
  this.addButton = 'add';

  imageService.getAll()
    .then(images => this.images = images)
    .catch(err => console.log(err));

  this.add = imageToAdd => {
    imageService.add(imageToAdd)
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
