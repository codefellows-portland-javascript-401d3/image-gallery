import template from './text-list-item.html';

export default {
  template,
  bindings: {
    item: '='
  },
  controller: function() {
    console.log('called text-list-item.js controller');
  }
};
