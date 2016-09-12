import template from './full.html';
import styles from './full.scss';

export default {
  template,
  bindings: {
    images: '<'
  },
  controller() {
    this.styles = styles;
  }
};
