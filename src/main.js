import angular from 'angular';
import app from './app';
import routes from './routes';
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './scss/main.scss';

app.config(routes);

app.value('apiUrl', process.env.API_URL || '/api'); // This is like a mini-service that just holds a primitive value.

angular.bootstrap(document, [app.name]);
