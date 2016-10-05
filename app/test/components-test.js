/* globals angular, chai */
const assert = chai.assert;

describe('App Components', function() {

  const imageSvc = {};

  const $state = {
    params: {}
  };
  const albumSvc = {};
  const tokenSvc = {
    getUserId() {
      return 'id';
    }
  };

  const userSvc = {};

  const $window = {
    localStorage: {
      token: 'token',
      username: 'aaron'
    }
  };

  beforeEach(angular.mock.module('components'));
  beforeEach(angular.mock.module('services', {
    tokenService: tokenSvc,
    imageService: imageSvc,
    albumService: albumSvc,
    userService: userSvc,
    $window,
    $state
  }));

  let $component, $scope;

  beforeEach(angular.mock.inject( ($rootScope, _$componentController_) => {
    $component = _$componentController_;
    $scope = $rootScope.$new();
  }));

  it('the images component initializes with correct inital data', () => {
    const images = [{album: 123}, {album: 456}];
    const albumListId = 123;
    //need to change this to getByAlbum now
    imageSvc.getByAlbum = (id) => {
      const byAlbum = images.filter(e => e.album === id);
      return Promise.resolve(byAlbum);
    };
    const component = $component('images', null, ({images, albumListId}));

    assert.equal(component.addButton, 'add');
    assert.equal(component.count, 0);
  });

  it('images component increments count by one when next is called', () => {
    const images = [{album: 123}, {album: 456}];
    const component = $component('images', null, ({images}));
    assert.equal(component.count, 0);
    component.next();
    assert.equal(component.count, 1);
  });

  it('images component decrements count by one when last is called', () => {
    const images = [{album: 123}, {album: 456}];
    const component = $component('images', null, ({images}));

    component.count++;
    assert.equal(component.count, 1);
    component.last();
    assert.equal(component.count, 0);
  });

  it('images component slideTimer function sets this.timer to $timeout function', () => {
    const images = [{album: 123}, {album: 456}];
    const component = $component('images', null, ({images}));
    component.timer = null;
    assert.notOk(component.timer);
    component.slideTimer();
    assert.ok(component.timer);
  });

  it('images component properly calls imageService remove function', () => {
    const images = [{vote: 1}];

    imageSvc.remove = (imageToRemove) => {
      images.splice(0, 1);
      return Promise.resolve(imageToRemove);
    };

    const component = $component('images', null, {images});
    console.log(component.images[0]);

    assert.deepEqual(component.images.length, 1);
    component.remove(component.images[0]);
    assert.deepEqual(component.images.length, 0);
  });

  it('the images component initializes with $ctrl.view set to list', () => {
    const images = [];
    imageSvc.getAll = () => {
      return Promise.resolve(images);
    };
    const component = $component('images', null, ({imageService: imageSvc}));

    assert.equal(component.view, 'list');
  });

  it('images component properly calls imageService vote function', function() {
    const images = [{vote: 0},{vote: 0}];
    imageSvc.vote = (voteImage, vote) => {
      if (vote) {
        voteImage.vote++;
      } else {
        voteImage.vote--;
      }
      return Promise.resolve(images);
    };

    const component = $component('images', null, {images});

    component.vote(images[0], 1);
    component.vote(images[1]);
    assert.deepEqual(component.images[0].vote, 1);
    assert.deepEqual(component.images[1].vote, -1);
  });

  it('images component properly calls imageService add function', () => {
    const images = [{vote: 0}];
    const image = {vote: 0};

    imageSvc.add = (imageToAdd) => {
      images.unshift(imageToAdd);
      this.addButton = 'add';
      return Promise.resolve(imageToAdd);
    };

    const component = $component('images', null, {images});

    assert.deepEqual(component.images.length, 1);
    component.add(image);
    assert.deepEqual(component.images.length, 2);
  });

  it('images component calls imagerService remove function', () => {

    const images = [{vote: 0}];
    const image = {vote: 0};

    imageSvc.remove = (imageToRemove) => {
      const index = images.indexOf(imageToRemove);
      images.splice(index,1);
      return Promise.resolve(imageToRemove);
    };

    const component = $component('images', null, {images});

    assert.deepEqual(component.images.length, 1);
    component.remove(image);
    assert.deepEqual(component.images.length, 0);

  });

  it('images component next function increments count by 1 and sets current image', () => {
    const images = [{vote: 0, current: true}, {vote: 1, current: false}, {vote: 2, current: false}];

    const component = $component('images', null, {images});

    assert.ok(component.images[0].current);
    component.next();
    assert.ok(component.images[1].current);
    assert.ok(!component.images[0].current);

  });

  describe('full view component', () => {

    it('the full view component calls vote properly', () => {
      const images = [];
      const image = {vote: 0};
      images.push(image);
      //mocked vote function
      function vote (image, vote) {
        vote === 1 ? images[0].vote++ : images[0].vote--;
      }

      const component = $component('fullView', null, {vote, images, image});
      component.submit(1);
      assert.deepEqual(component.images[0].vote, 1);
    });

  });

  describe('new image component', () => {

    function testResetImage(image) {
      assert.ok(image, 'image object should exist');
      assert.notOk(image.title, 'image should not have title');
      assert.notOk(image.description, 'image should not have description');
    }

    it( 'calls add with new image and clears out local image', () => {
      let addedImage = null;
      const add = image => {
        addedImage = image;
      };

      const component = $component( 'newImage', {$scope}, {add});
      testResetImage(component.image);

      $scope.addImage = {
        $setPristine: function () {
          console.log('setPristine');
        },
        $setUntouched: function () {
          console.log('setUntouched');
        }
      };

      const image = component.image;
      image.title = 'new image';
      image.description = 'some description';

      component.submit();
      assert.deepEqual(addedImage, image);
      testResetImage(component.image);
    });
  });

  describe('edit image component', () => {

    it('save calls imageService.update and then the mdDialog.hide() method', done => {
      const image = {title: 'oldImage', _id: 215, description: 'old description.'};

      const $mdDialog = {
        hide: function (obj) {
          console.log('got to mdDialog');
          assert.ok(obj);
          return obj;
        }
      };

      imageSvc.update = (imageToUpdate) => {
        console.log('got to imageSvc.update');
        assert.deepEqual(image, imageToUpdate);
        return Promise.resolve(imageToUpdate);
      };

      const component = $component('editImageDialog', {$mdDialog});

      component.image = {title: 'oldImage', _id: 215, description: 'old description.'};

      component.save();

      setTimeout( () => {
        assert.deepEqual(component.image, image);
        done();
      }, 100);

    });
  });

  describe('album components', () => {
    it('initializes with correct component data', ()=> {
      const albums = [{name: 'album1'}, {name: 'album2'}];

      albumSvc.getAlbumsbyUser = (id) => {
        return Promise.resolve(id);
      };

      albumSvc.getAll = function () {
        return Promise.resolve(albums);
      };
      const component = $component('albums', null, {albums});
      assert.equal(component.addButton, 'add');
    });

    it('album component add calls albumService.add', () => {
      const albums = [{name: 'album1'}];
      const album = {name: 'album2'};

      albumSvc.add = (albumToAdd) => {
        albums.unshift(albumToAdd);
        this.addButton = 'add';
        return Promise.resolve(albumToAdd);
      };
      const component = $component('albums', null, {albums});
      assert.equal(component.albums.length, 1);
      component.add(album);
      assert.equal(component.albums.length, 2);
    });
  });

  describe('new album component', () => {

    function testResetAlbum(album) {
      assert.ok(album, 'album object should exist');
      assert.notOk(album.title, 'album should not have title');
      assert.notOk(album.description, 'album should not have description');
    };

    it( 'calls add with new album and clears out local album', () => {
      let addedAlbum = null;
      const add = album => {
        addedAlbum = album;
      };

      const component = $component( 'newAlbum', {$scope}, {add});
      testResetAlbum(component.album);

      $scope.addAlbum = {
        $setPristine: function () {
          console.log('setPristine');
        },
        $setUntouched: function () {
          console.log('setUntouched');
        }
      };

      const album = component.album;
      album.title = 'new album';
      album.description = 'some description';

      component.submit();
      assert.deepEqual(addedAlbum, album);
      testResetAlbum(component.album);
    });
  });

  describe('header components', () => {
    it('display header calls $state.go', () => {
      let count = 0;
      $state.go = function (location, params) {
        console.log(params);
        count++;
      };
      $state.current = {
        name: 'albums'
      };

      const component = $component('displayHeader');
      component.display = 'list';
      component.change();
      assert.equal(count, 1);

    });

    it('appHeader initializes with localStorage token and username', () => {

      const component = $component('appHeader');
      assert.deepEqual(component.username, 'aaron');
      assert.deepEqual(component.token, 'token');
    });

    it('appHeader logout resets $ctrl.username and calls userService logout', () => {

      userSvc.logout = () => {
        component.loggedIn = false;
      };
      const component = $component('appHeader');
      component.loggedIn = true;
      assert.ok(component.loggedIn);
      assert.ok(component.username);
      component.logout();
      assert.notOk(component.loggedIn);
      assert.notOk(component.username);

    });
  });

});
