import template from './images.html';
import styles from './images.scss';

export default {
  template,
  bindings: {
    images: '='
  },
  controller: function() {
    this.styles = styles;
  }
};
