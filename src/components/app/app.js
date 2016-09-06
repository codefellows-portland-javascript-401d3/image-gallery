import template from './app.html';

export default {
  template,
  controller
};

controller.$inject = ['imageService', 'galleryService'];
function controller(imageService, galleryService) {

  this.chooseFrame = selection => {
    this.list = false;
    this.thumb = false;
    this.full = false;
    this.addImageForm = false;
    this.addGalleryForm = false;
    this[selection] = true;
  };

  this.chooseFrame('list'); // init value

// handling image methods
  this.getImages = () => {
    if(this.gallery === 'all') {
      imageService.getAll()
      .then( images => {
        this.images = images;
        this.galleryName = 'All Images';
      } )
      .catch( err => console.log(err) );
    } else {
      galleryService.getById(this.gallery)
      .then( gallery => {
        this.galleryName = `"${gallery.name}" Gallery`;
        this.images = gallery.images;
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

  // this.removeImage = imageToRemove => {
  //   imageService.remove( imageToRemove )
  //   .then( () => this.getImages() )
  //   .catch( err => console.log(err) );
  // };

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
    console.log('this.gallery:',this.gallery);
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
