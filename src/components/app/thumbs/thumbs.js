import template from './thumbs.html';
import styles from './thumbs.scss';

export default {
  template,
  bindings: {
    images: '='
  },
  controller
};

// controller.$inject = ['imageService', 'galleryService'];
function controller() {
  this.styles = styles;
};
