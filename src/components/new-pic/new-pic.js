import template from './new-pic.html';
import angular from 'angular';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};
  
  
// controller.inject = ['$mdDialog'];
function controller() {
  // this.image = angular.copy(this.form);

  // const resetImage = () => {
  //   this.image = {};
  // };

  // resetImage();

  this.save = () => {
    this.add(this.image);
    $mdDialog.hide();
  };
};