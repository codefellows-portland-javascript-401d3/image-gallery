const {assert} = chai;

describe('new-pic', () => {

  beforeEach(angular.mock.module('components'));

  let $component;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  it('has has a value for view', () => {
    const component = $component('new-pic');
    const save = component.save;
    assert.isOk(view);
  });



});