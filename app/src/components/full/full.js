import template from './full.html';
import styles from './full.css';

export default {
  template,
  controllerAs: 'full',
  require: {
    app:'^^'
  },
  controller () {
    this.styles = styles;
  }
};
