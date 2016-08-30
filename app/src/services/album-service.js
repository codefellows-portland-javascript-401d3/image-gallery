albumService.$inject = ['$http', 'apiUrl'];

export default function albumService ($http, apiUrl) {
  return {
    getAll () {
      return $http.get(`${apiUrl}/albums`)
        .then(response => response.data);
    },

    add (album) {
      return $http.post(`${apiUrl}/albums`, album)
        .then(response => response.data);
    },

    remove (album) {
      return $http.delete(`${apiUrl}/albums/${album._id}`)
        .then(response => response.data);
    },

    update (album) {
      return $http.put(`${apiUrl}/albums/${album._id}`, album)
        .then(response => response.data);
    }

  };
}
