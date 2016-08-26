import template from './list-view.html';
import styles from './list-view.scss';

export default {
  template,
  bindings: {
    image: '<'
  },
  controller
};

controller.$inject = ['$mdDialog'];
function controller($mdDialog) {
  this.styles = styles;
  this.edit = $event => {
    const parentEl = angular.element(document.body);
    $mdDialog.show({
      parent: parentEl,
      targetEvent: $event,
      controllerAs: '$ctrl',
      bindToController: true,
      template: '<edit-image-dialog image="$ctrl.image"></edit-image-dialog>',
      controller(){},
      locals: {
        image: this.image
      },
      clickOutsideToClose: true,
      escapeToClose: true
    })
    .then( updatedImage => {
      if (!updatedImage) return;
      //pass copied and updated version to original
      angular.copy(updatedImage, this.image);
    });
  };

}
