import angular  from 'angular';
import app from './app';
import routes from './routes';
import http from './http';
import auth from './auth';
import './scss/main.scss';

app.config(http);
app.config(routes);
app.run(auth);
app.value('apiUrl', process.env.API_URL || '/api');

angular.bootstrap(document, [app.name]);
