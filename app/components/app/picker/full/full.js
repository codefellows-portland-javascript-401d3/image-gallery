import template from './full.html';
import styles from './full.scss';

export default {
  template,
  controllerAs: 'full',
  bindings: {
    collection: '='
  },
  controller() {
    // console.log('this', this);
    this.styles = styles;
    this.index = 0;

    this.showPrev = () => {
      // if the current index - 1 does not exist, cycle back to last image in the array
      if ((this.index - 1) < 0) this.index = this.collection.length - 1;
      else this.index = --this.index;
    };

    this.showNext = () => {
      // if the current index + 1 is greater than the length of the array, cycle back to the first image in the array
      if ((this.index + 1) > (this.collection.length - 1)) this.index = 0;
      else this.index = ++this.index;
    };
  }
};
