import angular from 'angular';
import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import components from './components';
import services from './services';
import router from 'angular-ui-router';
import messages from 'angular-messages';

const app = angular.module( 'myApp', [
  components, angularMaterial, services, messages, router
]);

export default app.name;
