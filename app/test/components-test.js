/* globals angular, chai */
const assert = chai.assert;

describe('image components', function() {

  const imageSvc = {};

  beforeEach(angular.mock.module('components', {imageService: imageSvc}));

  let $component, $scope;

  beforeEach(angular.mock.inject( ($rootScope, _$componentController_) => {
    $component = _$componentController_;
    $scope = $rootScope.$new();
  }));

  it('the images component initializes with $ctrl.view set to list', () => {
    const images = [];
    imageSvc.getAll = () => {
      return Promise.resolve(images);
    };
    const component = $component('images', null, ({images}));

    assert.equal(component.view, 'list');
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

});
