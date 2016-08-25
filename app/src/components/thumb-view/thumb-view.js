import template from './thumb-view.html';
import styles from './thumb-view.scss';

export default {
  template,
  bindings: {
    image: '<'
  },
  controller: function() {
    this.styles = styles;
  }
};
