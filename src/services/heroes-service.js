heroesService.$inject = ['$http', 'apiUrl'];

export default function heroesService($http, apiUrl) {
  return {
    getAll() {
      return $http.get(`${apiUrl}/heroes`)
        .then(res => res.data)
        .catch(err => console.log(err));
    },

    add(hero) {
      console.log(hero);
      return $http.post(`${apiUrl}/heroes`, hero)
        .then(res => res.data)
        .catch(err => console.log(err));
    }
  };
}
