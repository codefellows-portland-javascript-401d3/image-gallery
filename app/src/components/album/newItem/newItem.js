import template from './newItem.html';
import styles from './newItem.scss';

export default {
  template,
  bindings: {
    add: '<',
    id: '<'
  },
  controller() {
    this.styles = styles;
    this.newImage = {};

    this.reset = () => {
      this.newImage = {};
    };

    this.submit = () => {
      this.add(this.newImage);
      this.reset();
    };
  }
};
