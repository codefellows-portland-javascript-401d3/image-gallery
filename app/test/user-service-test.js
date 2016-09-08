const assert = chai.assert;

describe('user service', function() {
  let $httpBackend = null, userService = null;
  let token = null, userId = null, username = null, removed = false;

  const tokenService = {
    get () {
      return token;
    },
    getUserId () {
      return userId;
    },
    getUsername () {
      return username;
    },
    set (tokenToSet) {
      token = tokenToSet;
    },
    remove () {
      removed = true;
    }
  };

  beforeEach(angular.mock.module('services', {apiUrl: '/api', tokenService}));

  beforeEach( () => {
    token = null;
    removed = false;
  });

  beforeEach(angular.mock.inject( (_userService_, _$httpBackend_) => {
    $httpBackend = _$httpBackend_;
    userService = _userService_;
  }));

  afterEach(() => {
    //make sure $httpBackend.flush() has actually completed tasks
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('isAuthenticated', done => {
    assert.notOk(userService.isAuthenticated());
    token = 'abc';
    assert.ok(userService.isAuthenticated());
    done();
  });

  it('signin works correctly', done => {
    const apiToken = {token: 'abc'};
    const credentials = {username: 'test', password: 'test'};
    $httpBackend
      .expectPOST('/api/auth/signin', credentials)
      .respond(apiToken);

    userService.signin(credentials)
      .then(() => {
        assert.deepEqual(token, apiToken.token);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('signup works correctly', done => {
    const apiToken = {token: 'abc'};
    const credentials = {username: 'test', password: 'test', email: 'test@gmail.com'};
    $httpBackend
      .expectPOST('/api/auth/signup', credentials)
      .respond(apiToken);

    userService.signup(credentials)
      .then(() => {
        assert.deepEqual(token, apiToken.token);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('gets current user', done => {
    const userId = '123';
    const user = {username: 'test', userId: '123'};

    $httpBackend
      .expectGET('/api/users/'+userId)
      .respond(user);

    userService.getMe(userId)
      .then(me => {
        assert.deepEqual(user, me);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it('removes token on logout', () => {
    assert.notOk(removed);
    tokenService.remove();
    assert.ok(removed);
  });

  it('updates user', (done) => {
    const user = {username: 'test', _id: '123'};
    const id = '123';

    $httpBackend
      .expectPUT('/api/users/123')
      .respond(user);

    userService.update(id)
      .then(updatedUser => {
        assert.deepEqual(updatedUser, user);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});
