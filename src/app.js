import angular from 'angular';
import router from 'angular-ui-router';
import components from './components';
import services from './services';
import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

const module = angular.module(`myApp`, [components, angularMaterial, services, router]);

module.config(['$mdThemingProvider', function($mdThemingProvider ){
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .backgroundPalette('deep-purple')
    .warnPalette('red');
}]);

export default module;
