import template from './app.html';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];
function controller(imageService) {

  this.chooseFrame = selection => {
    this.list = false;
    this.thumb = false;
    this.full = false;
    this.addForm = false;
    this[selection] = true;
  };

  this.chooseFrame('list'); // init value

  this.getImages = () => {
    imageService.getAll()
    .then( images => this.images = images )
    .catch( err => console.log(err) );
  };
  this.getImages(); // init on load

  this.submitImage = data => {
    imageService.add(data)
    .then( () => this.getImages() )
    .catch( response => {
      console.log('Error getting images:',response);
      this.result = true;
      this.message = 'Error: ' + response;
    });
  };

  this.remove = imageToRemove => {
    imageService.remove( imageToRemove )
    .then( deleted => {
      const index = this.images.findIndex( m => m._id === deleted._id );
      if ( index > -1 ) this.images.splice( index, 1 );
    });
  };
};
