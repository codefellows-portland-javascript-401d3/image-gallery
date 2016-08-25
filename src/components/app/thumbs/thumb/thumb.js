import template from './thumb.html';

export default {
  template,
  bindings: {
    image: '='
  },
  controller: function() {
    console.log('called thumb.js controller');
  }
};
