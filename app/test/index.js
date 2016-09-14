/* global angular, chai */

const assert = chai.assert;

describe('images', () => {

  beforeEach(angular.mock.module('components'));

  let $component;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  it ('album.view default state', () => {
    const component = $component('album');
    const view = component.view;
    assert.equal(view, 'text', 'the default view should be "text"');
  });

});
