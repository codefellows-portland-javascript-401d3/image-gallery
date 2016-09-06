import template from './edit-image-dialog.html';
import angular from 'angular';

export default {
  template,
  transclude: true,
  bindings: {
    imageToEdit: '<image',
  },
  controller
};

controller.$inject = ['$mdDialog', 'imageService'];
function controller($mdDialog, imageService) {
  this.image = angular.copy(this.imageToEdit);

  this.cancel = () => {
    $mdDialog.hide();
  };

  this.save = () => {
    imageService.update(this.image)
      .then(updatedImage => {
        $mdDialog.hide(updatedImage);
      });
  };

}
