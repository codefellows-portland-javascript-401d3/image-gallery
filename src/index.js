import angular from 'angular';
import app from './app';
import routes from './routes';
import template from './app.html';
import './scss/main.scss';

app.config(routes);

app.value('apiUrl', process.env.API_URL || '/api');

document.body.innerHTML = template;
angular.bootstrap(document, [app.name]);