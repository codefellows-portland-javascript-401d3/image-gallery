import template from './text-list.html';
import styles from './text-list.scss';

export default {
  template,
  bindings: {
    images: '=',
    removeImage: '='
  },
  controller
};

function controller() {
  this.styles = styles;
};
