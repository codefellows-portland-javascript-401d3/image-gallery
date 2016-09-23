configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    template: '<h1>Welcome to Geoff\'s Image gallery app!</h1>'
  })
  .state('gallerylist', {
    url: '/list/:gallery',
    resolve: {
      images: getImages,
      removeImage: removeGalleryImage
    },
    params: {
      path: 'list'
    },
    component: 'textList'
  })
  .state('list', {
    url: '/list',
    resolve: {
      images: getImages
    },
    params: {
      path: 'list',
    },
    component: 'textList'
  })
  .state('gallerythumbs', {
    url: '/thumbs/:gallery',
    resolve: {
      images: getImages
    },
    params: {
      path: 'thumbs'
    },
    component: 'thumbs'
  })
  .state('thumbs', {
    url: '/thumbs',
    resolve: {
      images: getImages
    },
    params: {
      path: 'thumbs'
    },
    component: 'thumbs'
  })
  .state('galleryfull', {
    url: '/full/:gallery',
    resolve: {
      images: getImages
    },
    params: {
      path: 'full'
    },
    component: 'images'
  })
  .state('full', {
    url: '/full',
    resolve: {
      images: getImages
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
