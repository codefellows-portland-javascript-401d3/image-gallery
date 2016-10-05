import template from './user.html';
import styles from './user.scss';

export default {
  template,
  bindings: {
    username: '&'
  },

  controller
};

controller.$inject = ['tokenService'];
function controller (tokenService) {
  this.styles = styles;
  this.username = tokenService.getUsername();
};
