/* globals angular, chai */
// Disables eslint warnings

// const assert = chai.assert;
const { assert } = chai;

describe('image gallery app', () => {
  
  beforeEach(angular.mock.module('components'));
  
  let $component;
  beforeEach(angular.mock.inject( $componentController => {
    $component = $componentController;
  }));

  it('initializes with seed values for images', () => {
    const component = $component('app');
    const imageList = component.images;
    assert.ok(imageList);
  });

});
