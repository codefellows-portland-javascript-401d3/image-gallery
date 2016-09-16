

describe('villainsService', ()=> {
  let $httpBackend = null, villainsService = null;

  beforeEach(angular.mock.module('services', {apiUrl: '/api'}));

  beforeEach(angular.mock.inject((_villainsService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    villainsService = _villainsService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('POSTS a new villain pic', done => {
    const sampleVillain = {title: 'Joker', url: 'joker.png'};
    const returnedVillainMock = {__v: 0, title: 'Joker', url: 'joker.png'};

    $httpBackend
      .expectPOST('/api/villains', sampleVillain)
      .respond(returnedVillainMock);

    villainsService.add(sampleVillain)
      .then(addedVillain => {
        assert.deepEqual(addedVillain, returnedVillainMock);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('GET all villain pics', done => {
    const sampleVillain = {title: 'Joker', url: 'joker.png'};
    const returnedVillainMock = {__v: 0, title: 'Joker', url: 'joker.png'};

    $httpBackend
      .expectGET('/api/villains')
      .respond(returnedVillainMock);

    villainsService.getAll()
      .then(villains => {
        assert.deepEqual(villains, returnedVillainMock);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('DELETE a villain pic', done => {
    // const sampleVillain = {title: 'Wonder Woman', url: 'wonder-woman.png'};
    const returnedVillainMock = {_id: 0, __v: 0, title: 'Joker', url: 'joker.png'};

    $httpBackend
      .expectDELETE('/api/villains/0')
      .respond(returnedVillainMock);

    villainsService.remove(0)
      .then(deletedImg => {
        assert.deepEqual(deletedImg, returnedVillainMock);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });
});