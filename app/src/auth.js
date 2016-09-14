// import angular from 'angular';

auth.$inject= ['$rootScope', 'userService', '$state'];

export default function auth($rootScope, userService, $state) {
  $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {

    function success() {
      return $state.go(toState.name, toParams);
    }

    if (toState.data && toState.data.requiresAuth && !userService.isAuthenticated()) {
      event.preventDefault();

      console.log('Authentication failed (src/auth.js)');
      success();
    }
  });
}
