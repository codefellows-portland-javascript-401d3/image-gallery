import template from './text.html';
import styles from './text.scss';

export default {
  template,
  controllerAs: 'text',
  bindings: {
    collection: '='
  },
  controller() {
    this.styles = styles;
  }
};
