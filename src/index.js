import angular from 'angular';
import app from './app';
import template from './app.html';
import './scss/main.scss';

const module = angular.module(app);
module.value('apiUrl', process.env.API_URL || '/api');

document.body.innerHTML = template;
angular.bootstrap(document, [app]);