import angular from 'angular';
import app from './app';
import './scss/main.scss';

const module = angular.module(app);

module.value('apiUrl', process.env.API_URL || '/api');

angular.bootstrap( document, [app] );
