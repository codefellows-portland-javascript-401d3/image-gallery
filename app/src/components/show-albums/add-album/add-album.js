import template from './add-album.html';
import styles from './add-album.js';

export default {
  template,
  bindings: {
    // needs functional scope so that it can see the add function in the (parent) show-albums controller
    add: '<'
  },
  controller() {
    this.styles = styles;
    this.album = {};

    const reset = () => {
      this.album = {};
    };

    this.submit = () => {
      if(this.album.title !== '') {
        this.add(this.album);
        reset();
      }
      else {
        console.log('sorry, that isn\'t going to work, please enter a title');
      }
    };
  }
};
