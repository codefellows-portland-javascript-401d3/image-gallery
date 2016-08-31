/* globals angular, chai */
// The line above disables eslint warnings

const { assert } = chai; // Same as: const assert = chai.assert;

describe('image add form', () => {
  
  beforeEach(angular.mock.module('components'));
  
  let $component;
  beforeEach(angular.mock.inject( $componentController => {
    $component = $componentController;
  }));

  function confirmFormClear(image) {
    assert.ok(image);
    assert.notOk(image.title);
    assert.notOk(image.desc);
    assert.notOk(image.link);
  }

  it('initializes with empty form', () => {
    const component = $component('addForm');
    confirmFormClear(component.image);
  });

  it('calls submit with new image and clears out form', () => {

    let addedImage = null;
    const submitImage = imageData => {
      addedImage = imageData;
    };

    const component = $component('addForm', null, { submitImage });
    const image = component.image; 
    confirmFormClear(component.image);
    
    image.title = 'the title';
    image.url = 'http://www.example.com/abc123';
    image.description = 'the new description';
    
    component.submit();
    assert.deepEqual(addedImage, image, 'the fuck?');
    confirmFormClear(component.image);
  });

});
