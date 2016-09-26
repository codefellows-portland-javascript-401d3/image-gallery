configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    template: '<h1>Welcome to Geoff\'s Image gallery app!</h1>'
  })
  .state('login', {
    url: '/login',
    component: 'login'
  })
  .state('gallerylist', {
    url: '/list/:gallery',
    data: {
      requiresAuth: true
    },
    resolve: {
      images: getImages,
      removeImage: removeGalleryImage,
      gallery: resolveGallery,
      navbar: resolveLoggedIn
    },
    params: {
      path: 'list'
    },
    component: 'textList'
  })
  .state('list', {
    url: '/list',
    data: {
      requiresAuth: true
    },
    resolve: {
      images: getImages,
      navbar: resolveLoggedIn
    },
    params: {
      path: 'list',
    },
    component: 'textList'
  })
  .state('gallerythumbs', {
    url: '/thumbs/:gallery',
    data: {
      requiresAuth: true
    },
    resolve: {
      images: getImages,
      loggedIn: resolveLoggedIn
    },
    params: {
      path: 'thumbs'
    },
    component: 'thumbs'
  })
  .state('thumbs', {
    url: '/thumbs',
    data: {
      requiresAuth: true
    },
    resolve: {
      images: getImages,
      loggedIn: resolveLoggedIn
    },
    params: {
      path: 'thumbs'
    },
    component: 'thumbs'
  })
  .state('galleryfull', {
    url: '/full/:gallery',
    data: {
      requiresAuth: true
    },
    resolve: {
      images: getImages,
      loggedIn: resolveLoggedIn
    },
    params: {
      path: 'full'
    },
    component: 'images'
  })
  .state('full', {
    url: '/full',
    data: {
      requiresAuth: true
    },
    resolve: {
      images: getImages,
      loggedIn: resolveLoggedIn
    },
    params: {
      path: 'full'
    },
    component: 'images'
  })
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

const removeGalleryImage = 
  ['galleryService', (galleryService) => {
    return function(galleryId, image) {
      galleryService.removeImage(galleryId, image._id)
      .then( result => this.images = result.images )
      .catch( err => console.log(err) );
    };
  }];

const resolveGallery = 
  ['$stateParams', ($stateParams) => {
    return $stateParams.gallery;
  }];

const resolveLoggedIn = 
  ['userService', (userService) => {
    return userService.isAuthenticated();
  }];
