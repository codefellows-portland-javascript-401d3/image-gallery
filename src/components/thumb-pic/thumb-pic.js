import template from './thumb-pic.html';
import styles from './thumb-pic.scss';

export default {
  template,
  bindings: {
    image: '<'
  }, 
  controller: function () {
    this.styles = styles;
  }
};