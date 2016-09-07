import template from './signup.html';
import './signup.scss';

export default {
  template,
  bindings: {
    success: '&',
    cancel: '&'
  },
  controller
};

controller.$inject = ['userService'];

function controller (userService) {
  this.credentials = {
    email: '',
    username: '',
    password: ''
  };

  this.authenticate = () => {
    console.log('in signup authenticate');
    return userService.signup(this.credentials)
      .then( () => {
        this.success();
        return true;
      })
      .catch( error => {
        this.cancel();
        this.error = error;
        return false;
      });
  };
}
