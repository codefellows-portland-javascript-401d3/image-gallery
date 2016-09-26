import template from './login.html';
import styles from './login.scss';

export default {
  template,
  controller
};

controller.$inject = ['userService'];
function controller(userService) {
  this.styles = styles;
  this.user = {
    name: '',
    email: '',
    password: ''
  };

  this.login = () => {
    return userService.login(this.user)
      .then( result =>{
        console.log('Login successful. Result:',result);
        return true;
      })
      .catch( error => {
        console.log('Error logging in:',error);
        return false;
      });
  };

  this.signup = () => {
    return userService.signup(this.user)
      .then( result =>{
        console.log('Signup successful. Result:',result);
        return true;
      })
      .catch( error =>{
        console.log('Error logging in:',error);
        return false;
      });
  };

}
