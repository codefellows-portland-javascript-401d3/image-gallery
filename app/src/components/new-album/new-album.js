import template from './new-album.html';

export default {
  template,
  bindings: {
    add: '<',
    addButton: '='
  },
  controller: function($scope){

    const resetAlbum = () => {
      this.album = {};
    };

    resetAlbum();

    this.submit = () => {
      this.add(this.album);
      resetAlbum();
      $scope.addAlbum.$setPristine();
      $scope.addAlbum.$setUntouched();
    };
  }
};
