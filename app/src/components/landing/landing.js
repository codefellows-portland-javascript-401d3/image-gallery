import template from './landing.html';
import styles from './landing.scss';

export default {
  template,
  controller
};

controller.$inject = ['$state', 'toState', 'toParams'];

function controller() {
  this.styles = styles;

  this.success = ($state, toState, toParams) => {
    return $state.go(toState.name, toParams);
  };
}
