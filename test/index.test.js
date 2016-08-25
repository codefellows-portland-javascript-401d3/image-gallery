/* globals angular, chai */
// Disables eslint warnings

// const assert = chai.assert;
const { assert } = chai;

describe('karma test suite', () => {

  // it('runs', () => {
  //   assert.ok(true);
  // });
  
  beforeEach(angular.mock.module('components'));
  
  let $component;
  beforeEach(angular.mock.inject( $componentController => {
    // component controller is a function we can call to 
    // create component controller instances
    $component = $componentController;
  }));

  it( 'initializes with values for images', () => {
    // pass the name of the controller
    // and the bindings we want to pass 
    // as key/values of an object
    const component = $component('app');
    // console.log('component',component);
    const imageList = component.images;
    assert.ok(imageList);
  });

  // function testResetMovie( movie ) {
  //   assert.ok( movie, 'movie object should exist' )
  //   assert.notOk( movie.title, 'movie should not have title' );
  //   assert.notOk( movie.genre, 'movie should not have genre' );
  // }

  // it( 'calls add with new movie and clears out local movie', () => {

  //   let addedMovie = null;
  //   const add = movie => {
  //     addedMovie = movie; 
  //   };

  //   const component = $component( 'newMovieForm', null, { add });
  //   testResetMovie( component.movie )
    
  //   movie.title = "new movie";
  //   movie.genre = "some genre";
    
  //   component.submit();
  //   assert.deepEqual( addedMovie, movie );
  //   testResetMovie( component.movie );
  // });
});