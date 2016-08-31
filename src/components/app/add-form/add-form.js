import template from './add-form.html';
import styles from './add-form.scss';

export default {
  template,
  bindings: {
    submitImage: '='
  },
  controller
};

function controller() {
  this.result = false;
  this.styles = styles;
  this.image = {};

  this.submit = () => {
    const data = {
      'title': this.image.title,
      'url': this.image.url,
      'description': this.image.description
    };
    this.submitImage(data);
    clearForm();
    this.result = true;
    this.message = 'Image saved';
  };

  const clearForm = () => {
    this.image = {};
  };
  clearForm(); // init the image object for testing purposes
}
