/* globals angular, chai */
const assert = chai.assert;

describe('services', function() {
  let $httpBackend = null;
  let imageService = null;
  let albumService = null;

  beforeEach(angular.mock.module('services', {apiUrl: '/api'}));

  beforeEach(angular.mock.inject( (_imageService_, _albumService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    imageService = _imageService_;
    albumService = _albumService_;
  }));

  afterEach(() => {
    //make sure $httpBackend.flush() has actually completed tasks
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('images service GETs all images', done => {
    const images = [1,2,3,4];

    $httpBackend
      .expectGET('/api/images')
      //mock response that will get set on the
      //.data property of $http response object
      .respond(images);

    imageService.getAll()
      .then(allImages => {
        assert.deepEqual(allImages, images);
        done();
      })
      .catch(done);
      //tell $httpBackend that everything is ready and
      //.flush() will initiate the response
    $httpBackend.flush();
  });

  it('images service gets image by id', done => {

    const imageToGet = {_id: 1, title: 'My Dog', url: 'http://someUrl.com', description: 'Description!'};
    const mockReturnObject = {_v: 0, _id: 1, title: 'My Dog', url: 'http://someUrl.com', description: 'Description!'};

    $httpBackend
      .expectGET('/api/images/1')
      .respond(mockReturnObject);

    imageService.get(imageToGet)
      .then(returnedImage => {
        assert.deepEqual(returnedImage, mockReturnObject);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('images service removes image by id', done => {

    const imageToRemove = {_id: 1, title: 'My Dog', url: 'http://someUrl.com', description: 'Description!'};
    const mockReturnObject = {_v: 0, _id: 1, title: 'My Dog', url: 'http://someUrl.com', description: 'Description!'};

    $httpBackend
      .expectGET('/api/images/1')
      .respond(mockReturnObject);

    imageService.get(imageToRemove)
      .then(removedImage => {
        assert.deepEqual(removedImage, mockReturnObject);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('images service POST new movie', done => {

    const newImage = {title: 'My Dog', url: 'http://someUrl.com', description: 'Description!'};
    const mockReturnObject = {_v: 0, title: 'My Dog', url: 'http://someUrl.com', description: 'Description!'};
    const id = '123';

    $httpBackend
      .expectPOST(`/api/images/${id}`, newImage)
      .respond(mockReturnObject);

    imageService.add(id, newImage)
      .then(addedImage => {
        assert.deepEqual(addedImage, mockReturnObject);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  // it('image service GET by album', done => {
  //   done();
  // });
  //
  // //need more album service tests
  // it('album service GET all albums', done => {
  //   done();
  // });

});
