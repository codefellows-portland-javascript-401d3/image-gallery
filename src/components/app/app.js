import template from './app.html';
import styles from './app.scss';

export default {
  template,
  controller
};

controller.$inject = ['imageService', 'galleryService'];
function controller(imageService, galleryService) {
  this.styles = styles;

  this.chooseFrame = selection => {
    this.list = false;
    this.thumb = false;
    this.full = false;
    this.addImageForm = false;
    this.addGalleryForm = false;
    this[selection] = true;
  };

  this.chooseFrame('list'); // init value
  
  this.toggleImageForm = () => {
    this.addImageSubForm = !this.addImageSubForm;
    if(this.addImageToGallerySubForm && this.addImageSubForm) this.addImageToGallerySubForm = false;
  };

  this.toggleGallerySubForm = () => {
    this.addImageToGallerySubForm = !this.addImageToGallerySubForm;
    if(this.addImageToGallerySubForm && this.addImageSubForm) this.addImageSubForm = false;
  };

// handling image methods
  this.getImages = () => {
    if(this.gallery === 'all') {
      imageService.getAll()
      .then( images => {
        this.images = images;
        this.galleryName = 'All Images';
        this.galleryChosen = false;
      } )
      .catch( err => console.log(err) );
    } else {
      galleryService.getById(this.gallery)
      .then( gallery => {
        this.galleryName = `"${gallery.name}" Gallery`;
        this.images = gallery.images;
        this.galleryChosen = true;
      })
      .catch( err => console.log(err) );
    }
  };

  this.submitImage = data => {
    imageService.add(data)
    .then( () => this.getImages() )
    .catch( response => {
      console.log('Error getting images:',response);
      this.result = true;
      this.message = 'Error: ' + response;
    });
  };

  this.removeImage = image => {
    if(this.galleryChosen) {
      galleryService.removeImage(this.gallery, image._id)
      .then( result => this.images = result.images )
      .catch( err => console.log(err) );
    } else {
      imageService.remove(image._id)
      .then( result => this.images = result.images )
      .catch( err => console.log(err) );
    }
  };

// Handling gallery methods //

  // This method just gets all the gallery names
  this.getGalleries = () => {
    galleryService.getAll()
    .then( galleries => this.galleries = galleries )
    .catch( err => console.log(err) );
  };
  this.getGalleries(); // init on load

  this.gallery = 'all'; // init on load

  // This method controls the top option text and gets the images for the current gallery
  this.selectGallery = () => {
    if(this.gallery != 'all') {
      this.defaulChoiceText = 'All Images';
    } else {
      this.defaulChoiceText = 'Gallery Select';
    }
    this.getImages();
  };
  this.selectGallery(); // init on load

  this.submitGallery = data => {
    galleryService.add(data)
    .then( () => this.getGalleries() )
    .catch( response => {
      console.log('Error adding gallery:',response);
      this.result = true;
      this.message = 'Error: ' + response;
    });
  };
};
