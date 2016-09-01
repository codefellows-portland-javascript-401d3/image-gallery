import template from './display-header.html';

export default {
  template,
  bindings: {
    display: '<'
  },
  controller
};

controller.$inject = ['$state'];

function controller ($state) {
  this.displays = ['full', 'list', 'thumb'];

  this.change = () => {
    $state.go($state.current.name, {display: this.display});
  };
};
