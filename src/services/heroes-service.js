heroesService.$inject = ['$http', 'apiUrl'];

export default function heroesService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/heroes`)
        .then(res => res.data)
        .catch(err => console.log(err));
    },

    add(hero) {
      return $http.post(`${apiUrl}/heroes`, hero)
        .then(res => res.data)
        .catch(err => console.log(err));
    },

    remove(heroId) {
      return $http.delete(`${apiUrl}/heroes/${heroId}`)
        .then(res => res.data)
        .catch(err => console.log(err));
    }
  };
}
