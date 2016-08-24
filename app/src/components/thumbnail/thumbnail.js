import template from './thumbnail.html';
import styles from './thumbnail.scss';

export default{
  template,
  controller(){
    this.styles = styles;
    this.link = 'https://static1.squarespace.com/static/51911780e4b00c72ce749dc2/t/57bcb321e4fcb567fdff2ee0/1471984444747/?format=1000w';
  }
};
