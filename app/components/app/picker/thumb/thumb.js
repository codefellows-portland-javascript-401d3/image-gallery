import template from './thumb.html';
import styles from './thumb.scss';

export default {
  template,
  controllerAs: 'thumb',
  bindings: {
    collection: '='
  },
  controller() {
    this.styles = styles;
  }
};
