villainsService.$inject = ['$http', 'apiUrl'];

export default function villainsService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/villains`)
        .then(res => res.data)
        .catch(err => console.log(err));
    },

    add(villain) {
      return $http.post(`${apiUrl}/villains`, villain)
        .then(res => res.data)
        .catch(err => console.log(err));
    },

    remove(villainId) {
      return $http.delete(`${apiUrl}/villains/${villainId}`)
        .then(res => res.data)
        .catch(err => console.log(err));
    }
  };
}
