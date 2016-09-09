/* globals angular, chai */

const {assert} = chai;

describe('update album form', ()=>{

  beforeEach(angular.mock.module('components'));

  let $component;
  beforeEach(angular.mock.inject($componentController=>{
    $component = $componentController;
  }));

  it('passes form data to update function', ()=>{
    let albumUpdated = null;
    const update = album=>{
      albumUpdated = album;
    };
    const info = {_id: '123', title: 'title'};

    const component = $component('updateAlbumForm', null, {update, info});
    component.album.title = 'test1';

    component.submit();
    assert.deepEqual(albumUpdated, {title: 'test1', _id: '123'});
  });

  it('errors when form is empty', ()=>{
    const info = {_id: '123', title: 'title'};

    const component = $component('updateAlbumForm', null, {info});
    component.album.title = '';

    component.submit();
    assert.equal(component.isInvalid, true);
  });

  it('errors when same title is added to form', ()=>{
    const info = {_id: '123', title: 'stuff'};
    
    const component = $component('updateAlbumForm', null, {info});
    component.album.title = 'stuff';

    component.submit();
    assert.equal(component.isInvalid, true);
  });

});
