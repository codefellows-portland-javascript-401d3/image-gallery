

describe('add-image-dialog', () => {

  beforeEach(angular.mock.module('components', 'ngMaterial'));

  let $component;
  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  it('has has a value for save', () => {
    const component = $component('addImageDialog');
    const save = component.save;
    const cancel = component.cancel;
    assert.isOk(save);
    assert.isOk(cancel);
  });

});