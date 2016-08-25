import angular from 'angular';
import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import components from './components';

const app = angular.module( 'myApp', [
  components, angularMaterial
]);

export default app.name;
