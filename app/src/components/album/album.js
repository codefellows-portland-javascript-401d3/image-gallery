import template from './album.html';
import styles from './album.scss';

export default {
  template,
  controller,
  bindings: {
    albumId: '<',
    display: '<',
    images: '=',
  }
};

controller.$inject = ['imageService', '$state'];

function controller (imageService, $state) {
  this.styles = styles;
  this.images = [];

  this.uiOnChange = params => {
    if (params.display) {
      if (params.display === 'gallery') this.display = 'gallery';
      else if (params.display === 'thumb') this.display = 'thumb';
      else this.display = 'list';
    }
    else this.display = 'list';
  };

  this.changeDisplay = selectedDisplay => {
    this.display = selectedDisplay;
    $state.go($state.current.name, {display: this.display});
  };

  imageService.getAlbumContent(this.albumId)
    .then(incoming => {
      this.images = incoming;
    })
    .catch(err => console.error('something went wrong: ', err));


  this.add = imageToAdd => {
    imageToAdd.album = this.albumId;
    imageService.add(imageToAdd)
      .then(addedImage => this.images.push(addedImage))
      .catch(err => console.error('something went wrong: ', err));
  };

  this.remove = imageId => {
    imageService.remove(imageId)
      .then(removed => {
        const index = this.images.findIndex(image => image._id === removed._id);
        if(index !== -1) this.images.splice(index, 1);
      })
      .catch(err => console.error('something went wrong: ', err));
  };

  this.update = (updatedImage, imageId) => {
    imageService.update(updatedImage, imageId)
      .then(updated => {
        const index = this.image.findIndex(updatedImage => updatedImage._id === updated._id);
        if(index !== -1) this.images.splice(index, 1, updated);
      })
      .catch(err => console.error('something went wrong: ', err));
  };
}
