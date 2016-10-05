const assert = chai.assert;

describe('token service', function() {
  let tokenService = null;

  const payload = {
    token: '123abc',
    signObj: {
      name: 'usertest',
      id: '123'
    }
  };

  const $window = {
    localStorage: {
      getItem(name) {
        return this[name];
      },
      setItem(name, item) {
        this[name] = item;
        // return this[name];
      },
      removeItem(name) {
        this[name] = null;
      }
    }
  };

  beforeEach(angular.mock.module('services', {$window}));

  beforeEach(angular.mock.inject( (_tokenService_) => {
    tokenService = _tokenService_;
  }));

  it('sets three localStorage items from payload obj returned from server', () => {

    assert.notOk($window.localStorage.token);
    assert.notOk($window.localStorage.username);
    assert.notOk($window.localStorage.userid);
    tokenService.set(payload);
    assert.deepEqual($window.localStorage.token, payload.token);
    assert.deepEqual($window.localStorage.username, payload.signObj.name);
    assert.deepEqual($window.localStorage.userid, payload.signObj.id);

  });

  it('gets token', () => {
    assert.deepEqual(tokenService.get(), payload.token);
  });

  it('gets username', () => {
    assert.deepEqual(tokenService.getUsername(), payload.signObj.name);
  });

  it('gets userId', () => {
    assert.deepEqual(tokenService.getUserId(), payload.signObj.id);
  });

  it('removes three items from localStorage', () => {
    tokenService.set(payload);
    assert.deepEqual($window.localStorage.token, payload.token);
    assert.deepEqual($window.localStorage.username, payload.signObj.name);
    assert.deepEqual($window.localStorage.userid, payload.signObj.id);
    tokenService.remove();
    assert.notOk($window.localStorage.token);
    assert.notOk($window.localStorage.username);
    assert.notOk($window.localStorage.userid);
  });

});
