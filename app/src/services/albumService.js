albumService.$inject = ['$http', 'apiUrl', '$cacheFactory'];

export default function albumService ($http, apiUrl, $cacheFactory) {

  const cache = $cacheFactory.get('$http');

  return {

    getAll() {
      return $http.get(`${apiUrl}/albums`, {cache:true})
        .then(response => response.data)
        .catch(err => console.error('something went wrong when calling getAll() on the albums: ', err));
    },

    add(album) {
      console.log('album', album);
      cache.remove(`${apiUrl}/albums`);

      return $http.post(`${apiUrl}/albums`, album)
        .then(response => response.data)
        .catch(err => console.error('something went wrong when calling add() on an album: ', err));
    },

    remove(albumId) {
      cache.remove(`${apiUrl}/albums`);

      return $http.delete(`${apiUrl}/albums/${albumId}`)
        .then(response => response.data)
        .catch(err => console.error('something went wrong when calling remove() on an album: ', err));
    },

    update(album, albumId) {
      console.log('albumId', albumId);
      // MAYBE ADD ALBUMID BACK INTO THIS?
      cache.remove(`${apiUrl}/albums`);

      return $http.put(`${apiUrl}/albums/${albumId}`, album)
        .then(response => response.data)
        .catch(err => console.error('something went wrong when calling update() on an album: ', err));
    }
  };
}
