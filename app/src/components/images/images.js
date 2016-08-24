import template from './images.html';
import styles from './images.scss';

export default {
  template,
  controller: function() {
    this.styles = styles;
    this.view = 'list';
    this.images = [{
      title: 'My Dog Bill',
      url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
      description: 'This is my golden retriever Bill on his 6th birthday!',
    },
    {
      title: 'My Cat Molly',
      url: '../../../images/wolf.jpg',
      description: 'This is my cat Molly when she was a puppy!',
    },
    {
      title: 'My Horse Sal',
      url: '../../../images/hedgehog.jpg',
      description: 'This is my draft horse Sal when he was young!',
    }];

  }
};
