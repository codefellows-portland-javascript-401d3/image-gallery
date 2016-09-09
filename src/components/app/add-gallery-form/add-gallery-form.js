import template from './add-gallery-form.html';
import styles from './add-gallery-form.scss';

export default {
  template,
  bindings: {
    submitGallery: '=',
    getGalleries: '=',
    galleries: '='
  },
  controller
};

controller.$inject = ['galleryService'];
function controller(galleryService) {
  this.result = false;
  this.styles = styles;
  this.gallery = {};

  this.submit = () => {
    const data = {
      'name': this.gallery.name,
      'description': this.gallery.description
    };
    this.submitGallery(data);
    clearForm();
    this.result = true;
    this.message = 'New Gallery Created';
  };

  const clearForm = () => {
    this.gallery = {};
  };
  clearForm(); // init the image object for testing purposes

  this.removeGallery = galleryId => {
    galleryService.remove(galleryId)
    .then( galleriesRemaining => this.galleries = galleriesRemaining )
    .catch( err => console.log(err) );
  };
}
