import template from './app.html';

export default {
  template,
  controller
};

controller.$inject = ['$http'];
function controller($http) {

  // this.images = [
  //   { title: 'Starfury', description: 'A Starfury type space fighter from Babylon 5.', url: 'http://i.imgur.com/rTrk6ib.jpg' },
  //   { title: 'X-Wing Fighter', description: 'An X-Wing Fighter from Star Wars.', url: 'http://i.imgur.com/R1wMXmC.jpg' },
  //   { title: 'Colonial Viper', description: 'A Colonial Viper from Battlestar Galactica.', url: 'http://i.imgur.com/DsXpPYy.jpg' }
  // ];

  this.chooseFrame = selection => {
    this.list = false;
    this.thumb = false;
    this.full = false;
    this[selection] = true;
  };

  $http.get('http://localhost:3000/api/images')
  .then( response => response.data )
  .then( images => this.images = images )
  .catch( err => console.log(err) );

  // this.add = imageToAdd => {
  //   this.images.push(imageToAdd);
  // };

  // this.remove = imageToRemove => {
  //   const index = this.images.indexOf(imageToRemove);
  //   if(index > -1) this.images.splice(index, 1);
  // };

};
