import template from './radio-buttons.html';
import styles from './radio-buttons.scss';

export default{
  template,
  controller,
  bindings: {
    display: '='
  }
};

function controller($state){
  this.styles = styles;
  this.viewChange = (viewState)=>{
    console.log(viewState);
    $state.go($state.current.name, {display: viewState});
  };
}
