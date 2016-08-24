import template from './images.html';

export default {
  template,
  controller: function() {
    this.images = [{
      title: 'Dog',
      url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
      description: 'Cute dog!'
    }];
    this.view = 'full';
  }
};