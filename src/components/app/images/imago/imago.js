import template from './imago.html';

export default {
  template,
  bindings: {
    image: '='
  },
  controller: function() {
    console.log('called image.js controller');
  }
};
