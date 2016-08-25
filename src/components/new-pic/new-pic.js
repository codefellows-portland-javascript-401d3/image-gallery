import template from './new-pic.html';
import angular from 'angular';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};
  
  
controller.inject = ['$timeout'];
function controller($timeout) {
  // this.image = angular.copy(this.form);

  const resetImage = () => {
    this.image = {};
  };

  resetImage();

  this.save = () => {
    // $timeout(() => {
      console.log('This is a new pic:', this.image);
      this.add(this.image);
      resetImage();

    // });
  };
};