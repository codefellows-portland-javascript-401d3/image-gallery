/* globals angular, chai */

const {assert} = chai;

describe('add album form', ()=>{

  beforeEach(angular.mock.module('components'));

  let $component;
  beforeEach(angular.mock.inject($componentController=>{
    $component = $componentController;
  }));

  it('initializes with an empty image', ()=>{
    const component = $component('addAlbumForm');
    assert.deepEqual(component.album, {});
  });

  it('passes form data to add function', ()=>{
    let albumAdded = null;
    const add = album=>{
      albumAdded = album;
    };

    const component = $component('addAlbumForm', null, {add});
    component.album.title = 'test1';

    component.submit();
    assert.deepEqual(albumAdded, {title: 'test1'});
  });

  it('errors when form field is blank', ()=>{
    const component = $component('addAlbumForm');

    component.album.title = '';

    component.submit();
    assert.equal(component.isInvalid, true);
  });

});
