import angular from 'angular';
import router from 'angular-ui-router';
import components from './components';
import services from './services';

const app = angular.module('myApp', [
  router,
  components,
  services
]);

export default app;
