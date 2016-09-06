imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl){
  return {
    getAll(){
      return $http.get(`${apiUrl}/images`)
        .then(response=>response.data)
        .catch(err=>console.log(err));
    },
    add(image){
      return $http.post(`${apiUrl}/images`, image)
        .then(response=>response.data)
        .catch(err=>console.log(err));
    }
  };
}
