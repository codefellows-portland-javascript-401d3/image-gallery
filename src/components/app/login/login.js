import template from './login.html';
import styles from './login.scss';

export default {
  template,
  controller
};

controller.$inject = ['userService', '$state'];
function controller(userService, $state) {
  this.styles = styles;
  this.user = {
    name: '',
    email: '',
    password: ''
  };

  this.login = () => {
    return userService.login(this.user)
      .then( () =>{
        this.navbar = true; 
        $state.go('list');
        return true;
      })
      .catch( error => {
        this.navbar = false; 
        console.log('Error logging in:',error);
        return false;
      });
  };

  this.signup = () => {
    return userService.signup(this.user)
      .then( () =>{
        $state.go('list');
        return true;
      })
      .catch( error =>{
        console.log('Error logging in:',error);
        return false;
      });
  };

}
