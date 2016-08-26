import template from './new-image.html';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

controller.$inject = ['$scope'];
function controller ($scope) {
  const resetImage = () => {
    this.image = {};
  };

  resetImage();

  this.submit = () => {
    this.add(this.image);
    resetImage();
    $scope.addImage.$setPristine();
    $scope.addImage.$setUntouched();
  };
};
