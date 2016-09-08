

describe('villains', () => {

  const villainsService = {};
  const $mdDialog = {};

  beforeEach(angular.mock.module('components', 'ngMaterial', {villainsServiceMock:villainsService}));
  beforeEach(angular.mock.module('services', {apiUrl: '/api'}));

  let $component;
  
  beforeEach(angular.mock.inject(($componentController) => {
    $component = $componentController;
  }));

  it('has has a value for view', () => {
    const component = $component('villains');
    const view = component.view;
    assert.isOk(view);
  });

  it('adds pic to this.images', () => {

    let newPic = {title: 'Joker'};
    const images = [];
    villainsService.add = image => {
      images.push(image);
    };
    const component = $component('villains');
    component.add(newPic);
    assert.deepEqual(component.images, images);
  });

  it('removes the selected pic', () => {
    const images = [{_id: 0, title: 'Joker', url: 'blah.com', description: 'evil'}];
    const newImages = [];
    villainsService.remove = () => {
      this.images.pop();
    };
    const component = $component('villains');
    component.remove();
    assert.deepEqual(component.images, newImages);
  });

});