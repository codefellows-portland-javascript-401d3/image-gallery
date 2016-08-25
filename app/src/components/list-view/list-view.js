import template from './list-view.html';
import styles from './list-view.scss';

export default {
  template,
  bindings: {
    image: '<'
  },
  controller: function() {
    this.styles = styles;
  }
};
