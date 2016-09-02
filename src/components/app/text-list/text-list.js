import template from './text-list.html';
import styles from './text-list.scss';

export default {
  template,
  bindings: {
    images: '='
  },
  controller
};

controller.$inject = ['imageService'];
function controller(imageService) {
  this.styles = styles;

  this.removeImage = imageId => {
    imageService.remove(imageId)
    .then( imagesRemaining => this.images = imagesRemaining )
    .catch( err => console.log(err) );
  };
};
