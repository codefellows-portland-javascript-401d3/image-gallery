import angular from 'angular';
import app from './app';
import './scss/main.scss';

angular.module( app )
.run(function() {
  //nothing to run here
});

angular.bootstrap( document, [ app ] );
