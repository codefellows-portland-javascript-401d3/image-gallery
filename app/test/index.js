/* global angular, chai */

const assert = chai.assert;

describe('images', () => {

  beforeEach(angular.mock.module('components'));

  let $component;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  it ('view', () => {
    const component = $component('picker');
    const view = component.view;
    assert.equal(view, 'text', 'the default view should be "text"');
  });

});
