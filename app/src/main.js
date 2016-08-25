import angular from 'angular';
import app from './app';
import './scss/main.scss';

angular.module( app )
.run(function() {
  //do nothing
});

angular.bootstrap( document, [ app ] );
