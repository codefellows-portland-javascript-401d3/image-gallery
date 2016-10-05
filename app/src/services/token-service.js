tokenService.$inject = ['$window'];

const TOKEN_NAME = 'token';
const USER_NAME = 'username';
const ID = 'userid';

export default function tokenService ($window) {
  return {
    get () {
      return $window.localStorage.getItem(TOKEN_NAME);
    },
    getUserId () {
      return $window.localStorage.getItem(ID);
    },
    getUsername () {
      return $window.localStorage.getItem(USER_NAME);
    },
    remove () {
      $window.localStorage.removeItem(USER_NAME);
      $window.localStorage.removeItem(TOKEN_NAME);
      $window.localStorage.removeItem(ID);
    },
    set (payload) {
      $window.localStorage.setItem(TOKEN_NAME, payload.token);
      $window.localStorage.setItem(USER_NAME, payload.signObj.name);
      $window.localStorage.setItem(ID, payload.signObj.id);
    }
  };
}
