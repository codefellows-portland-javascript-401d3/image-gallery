import angular from 'angular';
import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import components from './components';
import services from './services';
// import router from 'angular-ui-router';
import messages from 'angular-messages';
//need this for old $stateChanged events
import 'angular-ui-router/release/stateEvents';

const app = angular.module( 'myApp', [
  components,
  angularMaterial,
  services,
  messages,
  router,
  angular.module('ui.router.state.events').name
]);

export default app;
