import template from './text.html';
import styles from './text.css';

export default {
  template,
  controllerAs: 'text',
  require: {
    app:'^^'
  },
  controller() {
    this.styles = styles;
  }
};
