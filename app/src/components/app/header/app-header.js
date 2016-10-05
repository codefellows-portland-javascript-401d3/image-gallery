import template from './app-header.html';
import styles from './app-header.scss';

export default {
  template,
  bindings: {
    user: '='
  },
  transclude: true,
  controller
};

controller.$inject = ['userService', '$window'];
function controller (userService, $window) {
  this.styles = styles;
  this.token = $window.localStorage['token'];

  this.username = $window.localStorage['username'];
  this.logout = () => {
    this.username = null;
    userService.logout();
  };
}
