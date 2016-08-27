import template from './new-image.html';

export default {
  template,
  bindings: {
    add: '<',
    addButton: '='
  },
  controller
};

controller.$inject = ['$scope'];
function controller ($scope) {

  // this.showValue = false;

  const resetImage = () => {
    this.image = {};
  };

  resetImage();

  // this.cancelAdd = function() {
  //   this.addButton = 'add';
  // };

  this.submit = () => {
    this.add(this.image);
    resetImage();
    $scope.addImage.$setPristine();
    $scope.addImage.$setUntouched();
  };
};
