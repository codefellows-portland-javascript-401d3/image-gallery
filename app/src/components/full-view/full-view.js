import template from './full-view.html';
import styles from './full-view.scss';

export default {
  template,
  bindings: {
    image: '<',
    vote: '<'
  },
  controller: function() {
    this.styles = styles;
    this.submit = (value) => {
      this.vote(this.image, value);
    };
  }
};
