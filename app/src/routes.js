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
  .state('albums', {
    url: '/albums',
    resolve: {albums: ['albumService', (albumService) => {
      return albumService.getAll();
    }]},
    views: {
      main: {
        component: 'albumControl'
      }
    }
  })
  .state('images', {
    url: '/images?display',
    params: {
      display: {
        value: 'list',
        dynamic: true
      }
    },
    resolve: {
      albumId: ['$stateParams', p => p.albumId],
      display: ['$stateParams', p => p.display || 'list']
    },
    views: {
      header: {
        component: 'displayHeader' /*displayHeader*/
      },
      main: {
        component: 'images'
      }
    }
  });
  //catchAll for 404, re-directs to home page
  $urlRouterProvider.otherwise('/');
};



// .state('album', {
//   url: '/albums',
  // params: {
  //   display: {
  //     value: 'list',
  //     dynamic: true
  //   }
  // },
  // resolve: {
  //   // albumId: ['$stateParams', p => p.albumId],
  //   // display: ['$stateParams', p => p.display || 'list']
  // },
  // component: 'albumControl'
  // views: {
  //   header: {
  //     component: 'displayHeader' /*displayHeader*/
  //   },
  //   main: {
  //     // templateUrl: '/src/components/albums/albums.html'
  //     component: 'albumControl'
  //   }
  // }
// })
