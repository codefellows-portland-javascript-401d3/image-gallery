import template from './full-pic.html';
import styles from './full-pic.scss';

export default {
  template,
  bindings: {
    image: '<'
  }, 
  controller: function () {
    this.styles = styles;
  }
};