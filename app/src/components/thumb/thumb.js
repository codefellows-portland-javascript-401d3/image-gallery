import template from './thumb.html';
import styles from './thumb.css';

export default {
  template,
  controllerAs: 'thumb',
  require: {
    app:'^^'
  },
  controller() {
    this.styles = styles;
  }
};
