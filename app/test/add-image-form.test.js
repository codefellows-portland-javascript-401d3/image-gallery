/* globals angular, chai */

const {assert} = chai;

describe('add image form', ()=>{

  beforeEach(angular.mock.module('components'));

  let $component;
  beforeEach(angular.mock.inject($componentController=>{
    $component = $componentController;
  }));

  it('initializes with an empty image', ()=>{
    const component = $component('addImageForm');
    assert.deepEqual(component.image, {});
  });

  it('passes form data to add function', ()=>{
    let imageAdded = null;
    const add = image=>{
      imageAdded = image;
    };

    const component = $component('addImageForm', null, {add});
    component.image.title = 'test1';
    component.image.description = 'test2';
    component.image.link = 'test3';

    component.submit();
    assert.deepEqual(imageAdded, {title: 'test1', description: 'test2', link: 'test3'});
  });

  it('errors when form fields aren\'t filled out', ()=>{
    const component = $component('addImageForm');
    //description and link fields are blank
    component.image.title = 'test1';
    
    component.submit();
    assert.equal(component.isInvalid, true);
  });

});
