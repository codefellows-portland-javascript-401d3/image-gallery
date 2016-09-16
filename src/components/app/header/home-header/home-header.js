import template from './home-header.html';
import styles from './home-header.scss';

// landing page header component
export default {
  template,
  transclude: true,
  controller: function() {
    this.styles = styles;
  }
};