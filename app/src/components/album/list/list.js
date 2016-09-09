import template from './list.html';
import styles from './list.scss';

export default{
  template,
  bindings: {
    info: '<',
    remove: '<',
    update: '<'
  },
  controller(){
    this.styles = styles;
  }
};
