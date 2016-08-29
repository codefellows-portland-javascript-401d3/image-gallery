import template from './picker.html';
import styles from './picker.scss';

export default {
  template,
  controllerAs: 'picker',
  bindings: {
    collection: '=',
    view: '=',
  },
  controller() {
    this.styles = styles;
    this.view = 'text';
  }
};
