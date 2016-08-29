import template from './thumbnail.html';
import styles from './thumbnail.scss';

export default{
  template,
  bindings: {
    info: '<'
  },
  controller(){
    this.styles = styles;
  }
};
