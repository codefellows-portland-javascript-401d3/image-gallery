auth.$inject = ['$rootScope', 'userService', '$mdDialog', '$state'];

export default function auth ($rootScope, userService, $mdDialog, $state) {

  //angular-ui-router puts this event on $rootScope
  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
    console.log('$stateChangeStart ', toState, toParams, fromState, fromParams);
    if (toState.data && toState.data.requiresAuth && !userService.isAuthenticated()) {
      //ui-router default action is to make the state change
      event.preventDefault();
      //maybe here instead of a dialog we could create another signin state that
      //is a stripped down version of the home page, with only signin option
      //will try the dialog first to see if I like it
      const parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        targetEvent: event,
        controllerAs: '$ctrl',
        bindToController: true,
        template: '<user-auth success="success()"></user-auth>',
        controller: ['$scope', function ($scope) {
          $scope.success = function () {
            $mdDialog.hide();
            return $state.go(toState.name, toParams);
          };
        }],
        clickOutsideToClose: true,
        escapeToClose: true
      });
    }
  });
};

// this.cancel = () => {
//   $mdDialog.hide();
// };
//
// this.save = () => {
//   imageService.update(this.image)
//     .then(updatedImage => {
//       $mdDialog.hide(updatedImage);
//     });
// };
