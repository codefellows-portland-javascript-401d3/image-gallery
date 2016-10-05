import angular from 'angular';
import app from './app';
import auth from './auth';
import routes from './routes';
import http from './http';
import './scss/main.scss';

app.config(http);
app.config(routes);
app.run(auth);

// if we wanted to turn on caching across the board...
// (only applies to gets)
// app.config( [ '$httpProvider', function( $httpProvider ) {
//     $httpProvider.defaults.config = true;
// }]);
const module = angular.module(myApp);

module.value('apiUrl', process.env.API_URL || '/api');

angular.bootstrap( document, [app.name] );
