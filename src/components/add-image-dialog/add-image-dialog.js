import template from './add-image-dialog.html';
import angular from 'angular';

export default {
  template,
  bindings: {
    add: '<',
    newImage : '<image'
  },
  controller
};
  
  
controller.inject = ['$mdDialog'];
function controller($mdDialog) {
  this.image = angular.copy(this.newImage);

  // const resetImage = () => {
  //   this.image = {};
  // };

  // resetImage();
  this.cancel = () => {
    $mdDialog.hide();
  };

  this.save = () => {
    this.add(this.image);
    $mdDialog.hide();
  };
};