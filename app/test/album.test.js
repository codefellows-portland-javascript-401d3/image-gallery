/* globals angular, chai */

const {assert} = chai;

describe('album', ()=>{

  beforeEach(angular.mock.module('components'));

  let $component;
  beforeEach(angular.mock.inject($componentController=>{
    $component = $componentController;
  }));

  it('initializes view set as list', ()=>{
    const component = $component('album');
    assert.equal(component.view, 'list');
  });

  //TODO rewrite when images are stored on the server
  it('add function pushes item to images array', ()=>{
    const component = $component('album');
    let itemToAdd = {item: 'this is a test'};
    component.add(itemToAdd);
    assert.equal(component.images.length, 5);
    assert.deepEqual(component.images[4], itemToAdd);
  });

});
