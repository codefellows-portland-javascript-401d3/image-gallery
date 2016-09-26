auth.$inject = ['$rootScope', 'userService', '$state'];
export default function auth($rootScope, userService, $state) {
  $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
    console.log('Checking auth.js');
    if( toState.data && toState.data.requiresAuth && !userService.isAuthenticated() ){
      event.preventDefault();

      console.log('Check failed in auth.js');
      $state.go('login', toParams);

    }
  });
};
