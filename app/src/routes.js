appRoutes.$inject = ['$stateProvider', '$urlRouteProvider'];

export default function appRoutes ($stateProvider, $urlRouteProvider) {
  $stateProvider.state('home', {
    url: '/',
    views: {
      header: {
        component: 'homeHeader'
      },
      main: {
        template: '<p>Welcome to the Image Gallery.</p>'
      }
    }
  })
  .state('albums', {
    url: '/albums?display',
    params: {display: {dynamic: true}},
    resolve: {
      albumId: ['$stateParams', p => p.albumId],
      display: ['$stateParams', p => p.display || 'list']
    },
    views: {
      header: {
        component: 'displayHeader'
      },
      main: {
        component: 'albums'
      }
    }
  })
  .state('images', {

  });
  //catchAll for 404, re-directs to home page
  $urlRouteProvider.otherwise('/');
};
