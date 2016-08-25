import template from './images.html';
import styles from './images.scss';

export default {
  template,
  controller
};

controller.$inject = ['$http'];
function controller ($http) {
  this.styles = styles;
  this.view = 'list';

  $http.get('http://localhost:3000/api/images')
    .then(response => response.data)
    .then(images => this.images = images)
    .catch(err => console.log(err));

  this.vote = (voteImage, vote) => {
    const index = this.images.indexOf(voteImage);
    if (index > -1) {
      vote === 1 ? this.images[index].vote++ : this.images[index].vote--;
    }
  };
};
