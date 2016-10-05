configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    views: {
      header: {
        component: 'appHeader'
      },
      main: {
        template: '<p>Welcome to the Image Gallery.</p>'
      }
    }
  })
  .state('users', {
    url: '/users',
    data: {
      requiresAuth: true
    },
    views: {
      header: {
        component: 'appHeader'
      },
      main: {
        component: 'userInfo'
      }
    }
  })
  .state('albums', {
    url: '/albums?display',
    data: {
      requiresAuth: true
    },
    params: {
      display: {dynamic: true}
    },
    resolve: {
      albumId: ['$stateParams', p => p.albumId],
      display: ['$stateParams', p => p.display || 'list']
    },
    views: {
      header: {
        component: 'appHeader'
      },
      main: {
        component: 'albums'
      }
    }
  })
  .state('images', {
    url: '/images/:albumId/:albumName?display',
    data: {
      requiresAuth: true
    },
    params: {
      display: {dynamic: true}
    },
    resolve: {
      albumId: ['$stateParams', p => p.albumId],
      albumName: ['$stateParams', p => p.albumName],
      display: ['$stateParams', p => p.display || 'list']
    },
    views: {
      header: {
        component: 'appHeader'
      },
      main: {
        component: 'images'
      }
    }
  });
  //catchAll for 404, re-directs to home page
  $urlRouterProvider.otherwise('/');
};
