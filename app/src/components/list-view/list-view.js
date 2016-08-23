import template from './list-view.html';
import styles from './list-view.scss';

export default {
  template,
  bindings: {
    image: '<'
  },
  controller: function() {
    this.styles = styles;
    // this.image = {
    //   title: 'Cute Dog',
    //   url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
    //   description: 'What a cute dog!'
    // };
  }
};
