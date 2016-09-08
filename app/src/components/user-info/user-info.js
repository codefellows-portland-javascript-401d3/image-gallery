import template from './user-info.html';
import styles from './user-info.scss';

export default {
  template,
  bindings: {
    user: '='
  },
  controller
};

controller.$inject = ['userService', 'tokenService', '$mdDialog'];
function controller(userService, tokenService, $mdDialog) {
  this.styles = styles;
  this.userId = tokenService.getUserId();

  userService.getMe(this.userId)
    .then(user => {
      this.user = user;
    })
    .catch(err => console.log(err));

  this.edit = $event => {
    const parentEl = angular.element(document.body);
    $mdDialog.show({
      parent: parentEl,
      targetEvent: $event,
      controllerAs: '$ctrl',
      bindToController: true,
      template: '<edit-user user="$ctrl.user"></edit-user>',
      controller(){},
      locals: {
        user: this.user
      },
      clickOutsideToClose: true,
      escapeToClose: true
    })
    .then( updatedUser => {
      if (!updatedUser) return;
      //pass copied and updated version to original
      angular.copy(updatedUser, this.user);
    });
  };

}
