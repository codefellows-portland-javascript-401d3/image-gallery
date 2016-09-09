listService.$inject = ['$http', 'apiUrl'];

export default function listService($http, apiUrl) {

  return {
    getAll() {
      return $http.get(`${apiUrl}/images`)
      .then( response => response.data );
    },

    add(image) {
      return $http.post(`${apiUrl}/images`, image)
      .then( response => response.data );
    },

    remove(image) {
      return $http.delete(`${apiUrl}/images/${image._id}`)
      .then( () => {
        return $http.get(`${apiUrl}/images`);
      })
      .then( response => response.data );
    },

    update(image) {
      return $http.put(`${apiUrl}/images/${image._id}`, image)
      .then( response => response.data );      
    }
  };
}