import template from './newItem.html';
import styles from './newItem.scss';

export default {
  template,
  controllerAs: 'newItem',
  bindings: {
    collection: '=',
  },
  controller() {
    this.styles = styles;
    this.image = {};

    this.reset = () => {
      this.title = '';
      this.caption = '';
      this.link = '';
    };

    this.addNew = () => {
      let image = {
        title: this.title,
        caption: this.caption,
        link: this.link
      };
      console.log('image', image);
      this.collection.push(image);
      this.reset();
    };
  }
};
