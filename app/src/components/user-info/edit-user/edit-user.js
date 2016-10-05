import template from './edit-user.html';
import styles from './edit-user.scss';

export default {
  template,
  bindings: {
    userToEdit: '<user'
  },
  controller
};

controller.$inject = ['userService', 'tokenService', '$mdDialog'];
function controller(userService, tokenService, $mdDialog) {
  this.styles = styles;
  this.user = angular.copy(this.userToEdit);


  this.cancel = () => {
    $mdDialog.hide();
  };

  this.save = () => {
    userService.update(this.user)
      .then(updatedUser => {
        $mdDialog.hide(updatedUser);
      });
  };

}
