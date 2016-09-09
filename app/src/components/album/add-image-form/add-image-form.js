import template from './add-image-form.html';
import styles from './add-image-form.scss';

export default{
  template,
  bindings: {
    add: '<',
    id: '<'
  },
  controller(){
    this.styles = styles;

    const resetImage = ()=>{
      this.image = {};
    };

    resetImage();

    this.submit = ()=>{
      //TODO see about refactoring this later
      if('title' && 'description' && 'link' in this.image){
        if(this.image.title && this.image.description && this.image.link !== ''){
          this.isInvalid = false;
          this.image.album = this.id;
          this.add(this.image);
          resetImage();
        } else {
          this.isInvalid = true;
        }
      } else {
        this.isInvalid = true;
      }
    };
  }
};
