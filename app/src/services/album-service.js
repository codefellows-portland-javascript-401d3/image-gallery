albumService.$inject = ['$http', 'apiUrl'/*, '$cacheFactory'*/];

//TODO: revisit caching on GETs

export default function albumService($http, apiUrl/*, $cacheFactory*/){
  //const cache = $cacheFactory.get('$http');

  return {
    getAll(){
      return $http.get(`${apiUrl}/albums`/*, {cache: true}*/)
        .then(response=>response.data)
        .catch(err=>console.log(err));
    },
    add(album){
      //cache.remove(`${apiUrl}/albums`);

      return $http.post(`${apiUrl}/albums`, album)
        .then(response=>response.data)
        .catch(err=>console.log(err));
    }
  };
}
