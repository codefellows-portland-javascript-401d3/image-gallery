import template from './villains.html';

export default {
  template,
  controller
};
  
controller.$inject = ['$mdDialog', 'villainsService'];
  
  
function controller($mdDialog, villainsService) {
  
  this.view = 'full';
  this.images = [];

  villainsService.getAll()
    .then(villains => this.images = villains)
    .catch(err => console.log(err));

  this.add = newPic => {
    villainsService.add(newPic)
      .then(addedPic => {
        this.images.push(addedPic);
      })
      .catch(err => console.log(err));
  };

  this.remove = imageId => {
    villainsService.remove(imageId)
      .then(() => {
        villainsService.getAll()
          .then(villains => this.images = villains)
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  this.newPic = ($event) => {
    var parentEl = angular.element(document.body);
    $mdDialog.show({
      parent: parentEl,
      targetEvent: $event,
      controllerAs: '$ctrl',
      bindToController: true,
      template: '<add-image-dialog add="$ctrl.add" image="$ctrl.image"></add-image-dialog>',
      controller() {},
      locals: {
        image: this.image,
        add: this.add
      },
      clickOutsideToClose: true,
      escapeToClose: true
    })
    .then(newImage => {
      if(!newImage) return;
      angular.copy(newImage, this.image);
    });
  };

  
};
 