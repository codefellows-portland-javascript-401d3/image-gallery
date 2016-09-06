import angular from 'angular';
import myApp from './app';
// import routes from './routes';
import './scss/main.scss';

// app.config(routes);

// if we wanted to turn on caching across the board...
// (only applies to gets)
// app.config( [ '$httpProvider', function( $httpProvider ) {
//     $httpProvider.defaults.config = true;
// }]);
const module = angular.module(myApp);

module.value('apiUrl', process.env.API_URL || '/api');

angular.bootstrap( document, [myApp] );
