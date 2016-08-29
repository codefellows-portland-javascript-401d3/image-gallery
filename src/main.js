import angular from 'angular';
import app from './app';
import './scss/main.scss';

angular.module(app)
.run(['$rootScope', function() {

}]);

angular.bootstrap(document, [app]);
