/* globals angular, chai */
const assert = chai.assert;

describe('User Components', function() {

  const imageSvc = {};
  const $state = {
    params: {}
  };
  const albumSvc = {};
  const tokenSvc = {
    getUserId() {
      return 'id';
    },
    getUsername() {
      return 'aaron';
    }
  };
  const userSvc = {};

  const $event = {};

  const $mdDialog = {
    show: function (obj) {
      return Promise.resolve(obj);
    }
  };

  let $timeout;

  beforeEach(angular.mock.module('components'));
  beforeEach(angular.mock.module('services', {
    tokenService: tokenSvc,
    imageService: imageSvc,
    albumService: albumSvc,
    $state,
    userService: userSvc
  }));

  let $component, $scope;

  beforeEach(angular.mock.inject( ($rootScope, _$componentController_, _$timeout_) => {
    $component = _$componentController_;
    $scope = $rootScope.$new();
    $timeout = _$timeout_;
  }));

  describe('user components', () => {

    it('userAuth component initializes with $ctrl.action set properly', () => {
      const component = $component('userAuth');
      assert.deepEqual(component.action, 'signin');
    });

    it('user component initializes with $ctrl.username set to tokenService.getUsername()', () => {
      const component = $component('user');
      assert.deepEqual(component.username, 'aaron');
    });

    it('signup initializes with $ctrl.credentials set', () => {
      const component = $component('signup');
      assert.ok(component.credentials);
    });

    it('signup authenticate properly calls success or cancel function based on credentials passed in', () => {
      function success () {
        console.log('success');
      };

      function cancel () {
        console.log('cancel');
      }

      userSvc.signup = (creds) => {
        if (creds === null) {
          component.authenticated = false;
          return Promise.reject(creds);
        }
        component.authenticated = true;
        return Promise.resolve(creds);
      };

      const component = $component('signup', null, {success, cancel});

      component.authenticated = '';
      component.credentials = {
        email: 'aaron',
        username: 'aaron',
        password: 'aaron'
      };

      component.authenticate();
      assert.ok(component.authenticated);

      component.credentials = null;
      component.authenticate();
      assert.notOk(component.authenticated);
    });

    it('signin authenticate properly calls success or cancel function based on credentials passed in', () => {
      function success () {
        console.log('success');
      };

      function cancel () {
        console.log('cancel');
      }

      userSvc.signin = (creds) => {
        if (creds === null) {
          component.authenticated = false;
          return Promise.reject(creds);
        }
        component.authenticated = true;
        return Promise.resolve(creds);
      };

      const component = $component('signin', null, {success, cancel});

      component.authenticated = '';
      component.credentials = {
        username: 'aaron',
        password: 'aaron'
      };

      component.authenticate();
      assert.ok(component.authenticated);

      component.credentials = null;
      component.authenticate();
      assert.notOk(component.authenticated);
    });


    const user = {username: 'aaron', email: 'aaron'};
    it('userInfo component initializes with $ctrl.userId set to localStorage value', () => {

      userSvc.getMe = (id) => {
        return Promise.resolve(user);
      };

      const component = $component('userInfo', {$mdDialog});

      assert.deepEqual(component.userId, 'id');
    });

    // it('userInfo edit calls mdDialog show and sets $ctrl.user to updatedUser', () => {
    //   // const user = {username: 'aaron', email: 'aaron'};
    //   const updated = {username: 'aaronbini', email: 'acb'};
    //
    //   const component = $component('userInfo', {$mdDialog});
    //   component.parentEl = {};
    //
    //   console.log($timeout);
    //
    //   $timeout(function() {
    //     return component.user;
    //   },1000).then(user => console.log('got here'));
    //
    //   component.edit($event);
    //   $timeout(() => {
    //     return component.user;
    //   },100)
    //
    // });
  });

});
