configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        // header: {
        //   component: 'homeHeader'
        // },
        main: {
          template: '<h1>Welcome to Geoff\'s Image gallery app!</h1>'
        }
      }
    })
    .state('list', {
      url: '/list',
      resolve: {
        images: getImages
      },
      views: {
        // header: {
        //   component: 'homeHeader'
        // },
        main: {
          component: 'textList'
        }
      }
    })
    .state('thumbs', {
      url: '/thumbs',
      resolve: {
        images: getImages
      },
      views: {
        main: {
          template: '<h1>template for thumbs</h1>'
        }
      }
    })
    // .state('lists', {
    //   url: '/todos?display',
    //   params: { display: { dynamic: true } },
    //   resolve: {
    //     display: [ '$stateParams', p => p.display || 'list' ]
    //   },
    //   views: {
    //     main: {
    //       component: 'lists'
    //     }
    //   }
    // })
    // .state('list', {
    //   url: '/todos/:listId?display',
    //   params: { display: { dynamic: true } },
    //   resolve: {
    //     todoListId: ['$stateParams', p => p.listId],
    //     display: ['$stateParams', p => p.display || 'list']
    //   },
    //   views: {
    //     header: {
    //       component: 'displayHeader'
    //     },
    //     main: {
    //       component: 'todoList'
    //     }
    //   }
    // })
    ;

  $urlRouterProvider.otherwise('/');
}

const getImages = 
  ['imageService', 'galleryService', '$stateParams', (imageService, galleryService, $stateParams) => {
    if($stateParams.gallery == 'all' || !$stateParams.gallery) {
      return imageService.getAll();
    } else {
      return galleryService.getById($stateParams.gallery);
    }
  }];
