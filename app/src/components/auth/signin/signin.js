import template from './signin.html';
import styles from './signin.scss';

export default {
  template,
  bindings: {
    success: '&'
  },
  controller
};

controller.$inject = ['userService'];

function controller(userService) {
  this.styles = styles;
  this.credentials = {
    email : '',
    password: ''
  };

  this.authenticate = () => {
    return userService.signin(this.credentials)
      .then(() => {
        this.success();
        return true;
      })
      .catch(error => {
        this.error = error;
        return false;
      });
  };
}
