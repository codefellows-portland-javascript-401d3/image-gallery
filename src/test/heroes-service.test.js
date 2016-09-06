let {assert} = chai;

describe('heroesService', ()=> {
  let $httpBackend = null, heroesService = null;

  beforeEach(angular.mock.module('services', {apiUrl: '/api'}));

  beforeEach(angular.mock.inject((_heroesService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    heroesService = _heroesService_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('POSTS a new superhero pic', done => {
    const sampleHero = {title: 'Wonder Woman', url: 'wonder-woman.png'};
    const returnedHeroMock = {__v: 0, title: 'Wonder Woman', url: 'wonder-woman.png'};

    $httpBackend
      .expectPOST('/api/heroes', sampleHero)
      .respond(returnedHeroMock);

    heroesService.add(sampleHero)
      .then(addedHero => {
        assert.deepEqual(addedHero, returnedHeroMock);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('GET all superhero pics', done => {
    const sampleHero = {title: 'Wonder Woman', url: 'wonder-woman.png'};
    const returnedHeroMock = {__v: 0, title: 'Wonder Woman', url: 'wonder-woman.png'};

    $httpBackend
      .expectGET('/api/heroes')
      .respond(returnedHeroMock);

    heroesService.getAll()
      .then(heroes => {
        assert.deepEqual(heroes, returnedHeroMock);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('DELETE a superhero pics', done => {
    // const sampleHero = {title: 'Wonder Woman', url: 'wonder-woman.png'};
    const returnedHeroMock = {_id: 0, __v: 0, title: 'Wonder Woman', url: 'wonder-woman.png'};

    $httpBackend
      .expectDELETE('/api/heroes/0')
      .respond(returnedHeroMock);

    heroesService.remove(0)
      .then(deletedImg => {
        assert.deepEqual(deletedImg, returnedHeroMock);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });
});