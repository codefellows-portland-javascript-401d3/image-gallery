import template from './app-header.html';
import styles from './app-header.scss';

export default {
  template,
  transclude: true,
  controller () {
    this.styles = styles;
  }
};
