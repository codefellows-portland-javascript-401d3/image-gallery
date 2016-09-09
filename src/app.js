import angular from 'angular';
import components from './components';
import services from './services';

const app = angular.module('myApp', [components, services]);

export default app.name;
