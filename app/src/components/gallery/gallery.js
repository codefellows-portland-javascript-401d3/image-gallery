import template from './gallery.html';
import styles from './gallery.scss';

export default{
  template,
  bindings: {
    info: '<'
  },
  controller(){
    this.styles = styles;
  }
};
