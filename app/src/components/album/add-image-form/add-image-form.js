import template from './add-image-form.html';
import styles from './add-image-form.scss';

export default{
  template,
  bindings: {
    add: '<'
  },
  controller(){
    this.styles = styles;

    const resetImage = ()=>{
      this.image = {};
    };

    resetImage();

    this.submit = ()=>{
      /*verify title/description/link aren't undefined or ''*/
      /*chose this instead of required form attribute for cross browser compatibility*/
      if('title' && 'description' && 'link' in this.image){
        if(this.image.title && this.image.description && this.image.link !== ''){
          this.isInvalid = false;
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
