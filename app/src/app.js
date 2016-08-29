import angular from 'angular';
import components from './components';
import md from 'angular-material';

const app = angular.module('myApp', [components, md]);

app.config(['$mdThemingProvider', function($mdThemingProvider){
  $mdThemingProvider.theme('default').dark();
}]);

export default app.name;
