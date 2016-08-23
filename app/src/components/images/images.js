import template from './images.html';
import styles from './images.scss';

export default {
  template,
  controller: function() {
    this.styles = styles;
    this.images = [{
      title: 'Cute Dog',
      url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
      description: 'What a cute dog!'
    }];
  }
};
