import template from './images.html';

export default {
  template,
  controller
};
  
controller.$inject = ['$mdDialog', 'heroesService'];
  
  
function controller($mdDialog, heroesService) {
  
  this.view = 'full';
  this.images = [];

  heroesService.getAll()
    .then(heroes => this.images = heroes)
    .catch(err => console.log(err));

  this.add = newPic => {
    heroesService.add(newPic)
      .then(addedPic => {
        this.images.push(addedPic);
      })
      .catch(err => console.log(err));
  };

  this.remove = imageId => {
    heroesService.remove(imageId)
      .then(() => {
        heroesService.getAll()
          .then(heroes => this.images = heroes)
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
 