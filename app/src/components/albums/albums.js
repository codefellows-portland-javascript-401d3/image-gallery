import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  bindings: {
    display: '<'
  },
  controllerAs: 'albums',
  controller
};


controller.$inject = ['albumService', '$state'];
function controller (albumService, $state) {
  this.styles = styles;
  console.log($state);
  albumService.getAll()
    .then(albums => {
      this.albums = albums;
      console.log(this.albums);
    })
    .catch(err => console.log(err));


  this.add = albumToAdd => {
    albumService.add(albumToAdd)
      .then(album => this.albums.unshift(album))
      .catch(err => console.log(err));
  };

};
