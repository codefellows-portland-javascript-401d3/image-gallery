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

  this.submit = () => {

    let data = {
      'title': this.image.title,
      'url': this.image.link,
      'description': this.image.desc
    };
    
    this.submitImage(data);

    this.image.title = '';
    this.image.link = '';
    this.image.desc = '';
    this.result = true;
    this.message = 'Image saved';

  };

}
