

describe('heroes', () => {

  const heroesService = {};
  const $mdDialog = {};

  beforeEach(angular.mock.module('components', 'ngMaterial', {heroesServiceMock:heroesService}));
  beforeEach(angular.mock.module('services', {apiUrl: '/api'}));

  let $component;
  
  beforeEach(angular.mock.inject(($componentController) => {
    $component = $componentController;
  }));

  it('has has a value for view', () => {
    const component = $component('heroes');
    const view = component.view;
    assert.isOk(view);
  });

  it('adds pic to this.images', () => {

    let newPic = {title: 'Wonder Woman'};
    const images = [];
    heroesService.add = image => {
      images.push(image);
    };
    const component = $component('heroes');
    component.add(newPic);
    assert.deepEqual(component.images, images);
  });

  it('removes the selected pic', () => {
    const images = [{_id: 0, title: 'Wonder Woman', url: 'blah.com', description: 'Diana Prince'}];
    const newImages = [];
    heroesService.remove = () => {
      this.images.pop();
    };
    const component = $component('heroes');
    component.remove();
    assert.deepEqual(component.images, newImages);
  });

});