import template from './app.html';

export default {
  template,
  controller
};

controller.$inject = ['$state'];
function controller ($state) {
  this.user = {
    username: 'aaronbini'
  };

  this.goTo = () => {
    $state.go('account');
  };

};
