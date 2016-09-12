imageService.$inject = ['$http', 'apiUrl', '$cacheFactory'];

export default function imageService ($http, apiUrl, $cacheFactory) {

  const cache = $cacheFactory.get('$http');

  return {

    getAlbumContent(albumId) {
      return $http.get(`${apiUrl}/albums/${albumId}/images`, {cache:true})
        .then(response => response.data)
        .catch(err => console.error('something went wrong: ', err));
    },

    add(image) {
      cache.remove(`${apiUrl}/albums/${image.album}/images`);

      return $http.post(`${apiUrl}/albums/${image.album}/images`, image)
        .then (added => added.data)
        .catch(err => console.error('something went wrong:', err));
    },

    remove(imageId) {
      cache.remove(`${apiUrl}/albums`);

      return $http.delete(`${apiUrl}/images/${imageId}`)
        .then(removed => removed.data)
        .catch(err => console.error('something went wrong: ', err));
    },

    update(image, imageId) {
      cache.remove(`${apiUrl}/albums/${image.album}/images`);

      return $http.put(`${apiUrl}/images/${imageId}`, image)
        .then(updated => updated.data)
        .catch(err => console.error('something went wrong: ', err));
    }
  };
}
