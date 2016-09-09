import angular from 'angular';
import router from 'angular-ui-router';
import components from './components';
import services from './services';
import md from 'angular-material';

const app = angular.module('myApp', [
  router,
  components,
  services,
  md
]);

app.config(['$mdThemingProvider', function($mdThemingProvider){
  $mdThemingProvider.theme('default').dark();
}]);

export default app.name;
