import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  bindings: {
    display: '<'
  },
  controller
};


controller.$inject = ['albumService'];
function controller (albumService) {
  this.styles = styles;
  this.addButton = 'add';
  albumService.getAll()
    .then(albums => {
      this.albums = albums;
    })
    .catch(err => console.log(err));


  this.add = albumToAdd => {
    albumService.add(albumToAdd)
      .then(album => {
        this.albums.unshift(album);
        this.addButton = 'add';
      })
      .catch(err => console.log(err));
  };

};
