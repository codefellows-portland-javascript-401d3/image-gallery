import styles from './list-albums.scss';
import template from './list-albums.html';

export default {
  template,
  controller
};

controller.$inject = ['albumService'];

function controller(albumService){
  this.styles = styles;

  albumService.getAll()
    .then(albums=>this.albums=albums)
    .catch(err=>console.log(err));

  this.add = albumToAdd=>{
    albumService.add(albumToAdd)
      .then(addedAlbum=>this.albums.push(addedAlbum))
      .catch(err=>console.log(err));
  };

  this.remove = albumId=>{
    albumService.remove(albumId)
      .then(deleted=>{
        const index = this.albums.findIndex(album=>album._id === deleted._id);
        if(index !== -1){
          this.albums.splice(index, 1);
        }
      })
      .catch(err=>console.log(err));
  };

  this.update = albumToUpdate=>{
    albumService.update(albumToUpdate)
      .then(updatedAlbum=>{
        if(!updatedAlbum) return;
        const index = this.albums.findIndex(album=>album._id === updatedAlbum._id);
        if(index !== -1){
          this.albums.splice(index, 1, updatedAlbum);
        }
      })
      .catch(err=>console.log(err));
  };
}