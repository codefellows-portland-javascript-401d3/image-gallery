listService.$inject = ['$http', 'apiUrl'];

export default function listService($http, apiUrl) {

  return {
    getAll() {
      return $http.get(`${apiUrl}/galleries`)
      .then( response => response.data );
    },

    getById( galleryId ) {
      return $http.get(`${apiUrl}/galleries/${galleryId}`)
      .then( response => response.data );
    },

    add(gallery) {
      return $http.post(`${apiUrl}/galleries`, gallery)
      .then( response => response.data );
    },

    remove(gallery) {
      return $http.delete(`${apiUrl}/galleries/${gallery._id}`)
      .then( () => {
        return $http.get(`${apiUrl}/galleries`);
      })
      .then( response => response.data );
    },

    update(gallery) {
      return $http.put(`${apiUrl}/galleries/${gallery._id}`, image)
      .then( response => response.data );      
    }
  };
}