import template from './app.html';
import styles from './app.scss';

export default {
  template,
  controller
};

controller.$inject = ['imageService', 'galleryService', '$state', '$stateParams'];
function controller(imageService, galleryService, $state, $stateParams) {
  this.styles = styles;

// Navigation methods

  this.navSelect = target => {
    if(!this.gallery || this.gallery === 'all') {
      console.log(`State target: ${target}`);
      $state.go(`${target}`);
    } else {    
      $state.go('gallery' + target, {gallery: this.gallery});
    }
  };

  this.toggleImageForm = () => {
    this.addImageSubForm = !this.addImageSubForm;
    this.newGallerySubForm = false;
    this.addImageToGallerySubForm = false;
  };

  this.toggleNewGallerySubForm = () => {
    this.addImageSubForm = false;
    this.newGallerySubForm = !this.newGallerySubForm;
    this.addImageToGallerySubForm = false;
  };

  this.toggleImageToGalleryForm = () => {
    this.addImageSubForm = false;
    this.newGallerySubForm = false;
    this.addImageToGallerySubForm = !this.addImageToGallerySubForm;
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
        console.log('Gallery loaded:', gallery.name);
        this.galleryName = `"${gallery.name}" Gallery`;
        this.images = gallery.images;
        console.log('this.images:',this.images);
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

  // This method controls the top option text
  this.populateGalleryList = () => {
    if(this.gallery != 'all') {
      this.defaulChoiceText = 'All Images';
    } else {
      this.defaulChoiceText = 'Gallery Select';
    }
  };
  this.gallery = 'all'; // init on load
  this.populateGalleryList(); // init on load

  // This method changes state for gallery selections
  this.selectGallery = () => {
    this.populateGalleryList();
    const path = $stateParams.path || 'list';    
    if(this.gallery != 'all') {
      $state.go('gallery' + path, {gallery: this.gallery});
    } else {
      $state.go(path);
    }
  };
  
  this.submitGallery = data => {
    galleryService.add(data)
    .then( () => {
      this.getGalleries();
    })
    .catch( response => {
      console.log('Error adding gallery:',response);
      this.result = true;
      this.message = 'Error: ' + response;
    });
  };

};
