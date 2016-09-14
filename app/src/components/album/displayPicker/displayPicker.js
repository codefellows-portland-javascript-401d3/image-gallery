import template from './displayPicker.html';
import styles from './displayPicker.scss';

export default {
  template,
  bindings: {
    display: '='
  },
  controller: ($state) => {
    this.styles = styles;

    this.viewChange = viewState => {
      $state.go($state.current.name, {display: viewState});
    };
  }
};
