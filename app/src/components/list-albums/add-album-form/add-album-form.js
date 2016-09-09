import template from './add-album-form.html';
import styles from './add-album-form.scss';

export default{
  template,
  bindings: {
    add: '<'
  },
  controller(){
    this.styles = styles;

    const resetAlbum = ()=>{
      this.album = {};
    };

    resetAlbum();

    this.submit = ()=>{
      //TODO see about refactoring this later
      if('title' in this.album){
        if(this.album.title !== ''){
          this.isInvalid = false;
          this.add(this.album);
          resetAlbum();
        } else {
          this.isInvalid = true;
        }
      } else {
        this.isInvalid = true;
      }
    };
  }
};
