import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  bindings: {
    display: '<'
  },
  controller
};


controller.$inject = ['albumService', 'tokenService'];
function controller (albumService, tokenService) {
  this.styles = styles;
  this.addButton = 'add';
  this.userId = tokenService.getUserId();
  albumService.getAlbumsbyUser(this.userId)
    .then(albums => {
      this.albums = albums;
    })
    .catch(err => console.log(err));


  this.add = albumToAdd => {
    albumToAdd.user = this.userId;
    albumService.add(albumToAdd)
      .then(album => {
        this.albums.unshift(album);
        this.addButton = 'add';
      })
      .catch(err => console.log(err));
  };

};