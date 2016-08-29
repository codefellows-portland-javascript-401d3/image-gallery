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

controller.$inject = [ '$mdDialog', '$timeout' ];
function controller( $mdDialog, $timeout ) {
  this.image = angular.copy( this.imageToEdit );

  this.cancel = () => {
    $mdDialog.hide();
  };

  this.save = () => {
      // simulate service save that might look like:
      // movieService.update( this.movie )
      //     .then( updatedMovie => {
      //         $mdDialog.hide( updatedMovie );

      //     });

    $timeout( () => {
      const updatedImage = angular.copy( this.image );
      $mdDialog.hide( updatedImage );
    });
  };
}
