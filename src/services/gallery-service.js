listService.$inject = ['$http', 'apiUrl'];

export default function listService($http, apiUrl) {

  return {
    getAll() {
      return $http.get(`${apiUrl}/galleries`)
      .then( response => response.data );
    },

    getById(galleryId) {
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

    update(gallery, image) {
      return $http.get(`${apiUrl}/galleries/${gallery}`)
      .then( response => {
        const images = response.data.images.map( imageObj => {return imageObj._id;} );
        if(images.indexOf(image) == -1) {
          images.push(image);
          return $http.put(`${apiUrl}/galleries/${gallery}`, {images});
        } else {
          console.log('That image is already in the gallery.');
          return response;
        }
      })
      .then( response => {
        return response.data;
      })
      .catch( err => {
        console.log('error updating gallery');
        console.log(err);
        next(err);
      });
    },

    removeImage(gallery, image) {
      return $http.get(`${apiUrl}/galleries/${gallery}`)
      .then( response => {
        const images = response.data.images.map( imageObj => {return imageObj._id;} );
        const index = images.indexOf(image);
        if(index == -1) {
          return response;
        } else {
          images.splice(index,1);
          return $http.put(`${apiUrl}/galleries/${gallery}`, {images});
        }
      })
      .then( response => response.data )
      .catch( err => {
        console.log('error updating gallery');
        console.log(err);
        next(err);
      });
    }
  };
}