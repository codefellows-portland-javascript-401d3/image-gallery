imageService.$inject = ['$http', 'apiUrl'];

export default function imageService ($http, apiUrl) {
  return {
    getAll () {
      return $http.get(`${apiUrl}/images`)
        .then(response => response.data);
    },

    get (image) {
      return $http.get(`${apiUrl}/images/${image._id}`)
        .then(response => response.data);
    },

    getByAlbum (albumId) {
      return $http.get(`${apiUrl}/images/album/${albumId}`)
        .then(response => response.data);
    },

    add (albumId, image) {
      return $http.post(`${apiUrl}/images/${albumId}`, image)
        .then(response => response.data);
    },

    remove (image) {
      return $http.delete(`${apiUrl}/images/${image._id}`)
        .then(response => response.data);
    },

    update (image) {
      return $http.put(`${apiUrl}/images/${image._id}`, image)
        .then(response => response.data);
    },

    vote (image, vote) {
      return $http.put(`${apiUrl}/images/${image._id}/vote/${vote}`, image)
        .then(response => response.data);
    }
  };
}
