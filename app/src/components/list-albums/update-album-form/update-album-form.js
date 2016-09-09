import template from './update-album-form.html';
import styles from './update-album-form.scss';

export default{
  template,
  bindings: {
    update: '<',
    info: '<'
  },
  controller(){
    this.styles = styles;

    const resetAlbum = ()=>{
      this.album = {};
    };

    resetAlbum();

    this.submit = ()=>{
      const albumId = this.info._id;
      const originalTitle = this.info.title;
      this.album._id = albumId;

      if(this.album.title && (this.album.title !== originalTitle)){
        this.isInvalid = false;
        this.update(this.album);
        resetAlbum();
      } else {
        this.isInvalid = true;
      }

    };
  }
};
