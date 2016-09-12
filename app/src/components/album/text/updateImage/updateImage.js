import template from './updateImage.html';
import styles from './updateImage.scss';

export default {
  template,
  bindings: {
    update: '<',
    image: '<'
  },
  controller() {
    this.styles = styles;
    this.updatedImage = {
      title: '',
      caption: '',
      link: '',
    };

    this.reset = () => {
      this.updatedImage = {};
    };

    this.submit = (imageId) => {
      if (this.updatedImage.title === '') {
        this.updatedImage.title = this.image.title;
      }
      if (this.updatedImage.caption === '') {
        this.updatedImage.caption = this.image.caption;
      }
      if (this.updatedImage.link === '') {
        this.updatedImage.link = this.image.link;
      }
      this.update(this.updatedImage, imageId);
      this.reset();
      window.location.reload();
    };
  }
};
