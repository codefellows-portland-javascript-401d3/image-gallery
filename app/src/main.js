import angular from 'angular';
import app from './app';
import './scss/main.scss';
import 'angular-material/angular-material.css';

angular.module(app);

angular.bootstrap(document, [app]);
