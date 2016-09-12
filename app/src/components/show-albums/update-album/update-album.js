import template from './update-album.html';
import styles from './update-album.html';

export default {
  template,
  bindings: {
    update: '<',
    collection: '<',
    album: '<',
  },
  controller() {
    this.styles = styles;
    this.updatedAlbum = {
      title: '',
    };

    this.reset = () => {
      this.updatedAlbum = {};
    };

    this.submit = (albumId) => {
      if (this.updatedAlbum.title === '') {
        this.updateAlbum.title = this.image.title;
      }

      this.update(this.album, albumId);
      this.reset();
    };
  }
};
