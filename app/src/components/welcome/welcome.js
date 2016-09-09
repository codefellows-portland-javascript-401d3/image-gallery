import template from './welcome.html';
import styles from './welcome.scss';

export default {
  template,
  controller(){
    this.styles = styles;
  }
};
