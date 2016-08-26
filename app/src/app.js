import angular from 'angular';
import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import components from './components';
import factories from './factories';

const app = angular.module( 'myApp', [
  components, angularMaterial, factories
]);

export default app.name;
