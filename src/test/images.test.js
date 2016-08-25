const {assert} = chai;

describe('images', () => {

  beforeEach(angular.mock.module('components'));

  let $component;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  it('has has a value for view', () => {
    const component = $component('images');
    const view = component.view;
    assert.isOk(view);
  });



});