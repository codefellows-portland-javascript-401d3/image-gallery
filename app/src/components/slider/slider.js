import template from './slider.html';
import styles from './slider.scss';

export default {
  template,
  bindings: {
    image: '<',
    next: '<',
    last: '<',
    slideTimer: '<'
  },
  controller
};

controller.$inject = ['$state', '$timeout'];
function controller ($state, $timeout) {
  this.styles = styles;
  // console.log(this.next);
  // console.log(this.last);
  // console.log(this.slideTimer);
  // if ($state.params.display === 'slideshow') this.slideTimer();
}
