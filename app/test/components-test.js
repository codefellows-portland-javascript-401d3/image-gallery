/* globals angular, chai */
const assert = chai.assert;

describe('image components', function() {

  beforeEach(angular.mock.module('components', 'ngMaterial'));

  let $component, $scope;
  // let mdDialogMock;
  // let qMock;

  beforeEach(angular.mock.inject( ($rootScope, _$componentController_) => {
    $component = _$componentController_;
    $scope = $rootScope.$new();
  }));

  // beforeEach(() => {
  //
  //   inject((_$mdDialog_, $q) => {
  //     mdDialogMock = _$mdDialog_;
  //     qMock = $q;
  //   });
  //
  //   angular.extend(mdDialogMock, {
  //     show: function() {
  //       // let deferred = Promise.resolve({
  //       //   then: function(onFulfill, onReject) { onFulfill('Fulfilled'); }
  //       // });
  //       // new Promise((resolve, reject) => {
  //       //   resolve('Resolved');
  //       // });
  //       // return deferred;
  //       return Promise.resolve('resolved');
  //
  //     }
  //   });
  // });

  it('the images component initializes with $ctrl.view set to list', () => {
    const component = $component('images');
    assert.equal(component.view, 'list');
  });

  it('images component properly increases and decreases vote count', function() {
    const images = [{vote: 0},{vote: 0}];

    const component = $component('images', null, {images});

    component.vote(images[0], 1);
    component.vote(images[1]);
    assert.deepEqual(component.images[0].vote, 1);
    assert.deepEqual(component.images[1].vote, -1);
  });

  it('images component adds image to images array', () => {
    const images = [{vote: 0}];
    const image = {vote: 0};

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

  // describe('list view component', () => {
  //   // console.log($rootScope);
  //   it('list view component edits image title and description', () => {
  //
  //     /* Not sure how to run test for this component that requires
  //     material design dialog box */
  //
  //     const $mdDialog = mdDialogMock;
  //     const $q = qMock;
  //
  //     const component = $component('listView', {$q, $mdDialog}, {});
  //     console.log($mdDialog.show().then(value => {
  //       return value;
  //     }));
  //
  //     angular.extend(component, {
  //       edit: function edit() {
  //         return $mdDialog.show().then(value => {
  //           console.log(value);
  //         });
  //       }
  //     });
  //
  //     console.log(component.edit());
  //
  //   });
  //
  // });

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

});
