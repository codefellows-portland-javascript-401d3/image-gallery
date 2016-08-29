import angular from 'angular';
import app from './app/app';
import picker from './app/picker/picker';
import text from './app/picker/text/text';
import thumb from './app/picker/thumb/thumb';
import full from './app/picker/full/full';
import newItem from './app/newItem/newItem';

const components = angular.module('components', [])
  .component('app', app)
  .component('picker', picker)
  .component('text', text)
  .component('thumb', thumb)
  .component('full', full)
  .component('newItem', newItem);

export default components.name;
