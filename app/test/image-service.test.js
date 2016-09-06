/* globals angular, chai */

const {assert} = chai;

describe('image service', ()=>{
  let $httpBackend = null, imageService = null;

  beforeEach(
      angular.mock.module('services', {apiUrl: '/api'})
  );

  beforeEach(angular.mock.inject((_imageService_, _$httpBackend_)=>{
    $httpBackend = _$httpBackend_;
    imageService = _imageService_;
  }));

  afterEach(()=>{
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('GETs all images', done=>{
    const images = ['test', 'test1', 'test2'];

    $httpBackend
      .expectGET( '/api/images' )
      .respond(images);

    imageService.getAll()
      .then(allImages=>{
        assert.deepEqual(allImages, images);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('POSTs a new image', done=>{
    const newImage = {title: 'Title', description: 'Description', link: 'bomb.com'};
    const mockResponse = {__v: 0, title: 'Title', description: 'Description', link: 'bomb.com'};

    $httpBackend
      .expectPOST('/api/images', newImage)
      .respond(mockResponse);

    imageService.add(newImage)
      .then(addedImage=>{
        assert.deepEqual(addedImage, mockResponse);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });
});
