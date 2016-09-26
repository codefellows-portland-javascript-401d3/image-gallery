userService.$inject = ['tokenService', '$http', 'apiUrl'];
export default function userService (token, $http, apiUrl) {
  const current = token.get();

  if (current) {
    $http.get(`${apiUrl}/auth/verify`)
    .then( result => {
      console.log('Token verified on userService startup. Result:',result);
    })
    .catch( () => {
      token.remove();
      console.log('Bad token! Removed from local storage.');
    });
  }

  function signup(credentials) {
    return $http.post(`${apiUrl}/auth/signup`, credentials)
      .then( result => {
        console.log('User signed up. Result:',result.data);
        token.set(result.data.token);
      })
      .catch(err => {
        console.log('Error checking credential!',err);
        throw err.data;
      });
  };

  function login(credentials) {
    return $http.post(`${apiUrl}/auth/login`, credentials)
      .then( result => {
        console.log('Credential checked. Result:',result.data);
        token.set(result.data.token);
      })
      .catch(err => {
        console.log('Error checking credential!',err);
        throw err.data;
      });
  };

  function get() {
    return $http.get(`${apiUrl}/users/`)
      .then(result => result.data);
  };

  function getMe(id) {
    return $http.get(`${apiUrl}/users/${id}`)
      .then(result => result.data);
  };

  function update(userToUpdate, data) {
    return $http.put(`${apiUrl}/users/${userToUpdate._id}`, data)
      .then(result => {
        return result.data;
      });
  };

  return {
    isAuthenticated() {
      return !!token.get();
    },
    logout() {
      token.remove();
    },
    signup,
    login,
    update,
    getMe,
    get
  };
}
