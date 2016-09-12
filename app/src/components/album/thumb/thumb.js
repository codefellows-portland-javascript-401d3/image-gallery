import template from './thumb.html';
import styles from './thumb.scss';

export default {
  template,
  bindings: {
    images: '<'
  },
  controller() {
    this.styles = styles;
  }
};
