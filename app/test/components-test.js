/* globals angular, chai */
const assert = chai.assert;


describe('image components', function() {

  beforeEach(angular.mock.module('components'));

  let $component;

  beforeEach(angular.mock.inject( _$componentController_ => {
    $component = _$componentController_;
  }));

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

  describe('list view component', () => {

    it('list view component edits image title and description', () => {


      const component = $component('listView', null, {});
      console.log(component);

    });

  });


});
