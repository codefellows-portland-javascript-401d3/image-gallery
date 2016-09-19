import template from './thumbs.html';
import styles from './thumbs.scss';

export default {
  template,
  bindings: {
    images: '='
  },
  controller: function() {
    this.styles = styles;
    console.log('images:',this.images);
  }
};
