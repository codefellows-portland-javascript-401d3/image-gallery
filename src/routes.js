configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        header: {
          component: 'homeHeader'
        },
        main: {
          component: 'appHeader'
        }
      }
    })
    .state('superheroes', {
      url: '/superheroes',
      views: {
        header: {
          component: 'appHeader'
        },
        main: {
          component: 'heroes'
        }
      }
    })
    .state('villains', {
      url: '/villains',
      views: {
        header: {
          component: 'appHeader'
        },
        main: {
          component: 'villains'
        }
      }
    });
    

  $urlRouterProvider.otherwise('/');
};