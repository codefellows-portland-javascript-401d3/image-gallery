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
      this.collection.push(image);
      this.reset();
    };
  }
};
