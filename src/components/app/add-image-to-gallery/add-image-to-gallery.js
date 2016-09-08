import template from './add-image-to-gallery.html';
import styles from './add-image-to-gallery.scss';

export default {
  template,
  bindings: {
    gallery: '=',
    images: '='
  },
  controller
};

controller.$inject = ['imageService', 'galleryService'];
function controller(imageService,galleryService) {
  this.styles = styles;

  this.updateImageList = () => {
    imageService.getAll()
    .then( images => this.imageList = images )
    .catch( err => console.log(err) );
  };
  this.updateImageList();

  this.submit = () => {
    if(!this.imgageSelected) return;
    galleryService.update(this.gallery, this.imgageSelected)
    .then( result => this.images = result.images )
    .catch( err => console.log(err) );    
    resetForm();
  };

  const resetForm = () => {
    this.imgageSelected = '';
  };
  resetForm(); // init the image object for testing purposes
}
