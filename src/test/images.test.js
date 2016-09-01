

describe('images', () => {

  const heroesService = {};
  const $mdDialog = {};

  beforeEach(angular.mock.module('components', 'ngMaterial', {heroesServiceMock:heroesService}));
  beforeEach(angular.mock.module('services', {apiUrl: '/api'}));

  let $component;
  
  beforeEach(angular.mock.inject(($componentController) => {
    $component = $componentController;
  }));

  it('has has a value for view', () => {
    const component = $component('images');
    const view = component.view;
    assert.isOk(view);
  });

  it('adds pic to this.images', () => {

    let newPic = {title: 'Wonder Woman'};
    const images = [];
    heroesService.add = image => {
      images.push(image);
    };
    const component = $component('images');
    component.add(newPic);
    assert.deepEqual(component.images, images);
  });

});