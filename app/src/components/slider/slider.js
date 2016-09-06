import template from './slider.html';
import styles from './slider.scss';

export default {
  template,
  bindings: {
    image: '<',
    next: '<',
    last: '<',
  },
  controller: function () {this.styles = styles;}
};
