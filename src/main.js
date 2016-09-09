import angular from 'angular';
import app from './app';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './scss/main.scss';

const module = angular.module(app);

// .run(['$rootScope', function() {}]); // this is an init method that could be used if we had init data

module.value('apiUrl', process.env.API_URL || '/api'); // This is like a mini-service that just holds a primitive value.

angular.bootstrap(document, [app]);
