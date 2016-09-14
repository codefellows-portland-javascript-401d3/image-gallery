userService.$inject = ['tokenService', '$http', 'apiUrl'];

export default function userService(token, $http, apiUrl) {
  const current = token.get();
  if (current) {
    $http.get(`${apiUrl}/verify`)
      .catch(() => token.remove());
  }

  function credential(endpoint) {
    return credentials => {
      return $http.post(`${apiUrl}/${endpoint}`, credentials)
        .then(result => token.set(result.data.token))
        .catch(error => {
          throw error.data;
        });
    };
  }

  return {
    isAuthenticated() {
      return !!token.get();
    },
    logout() {
      token.remove();
    },
    singin: credential('signin'),
    signup: credential('signup')
  };
}
