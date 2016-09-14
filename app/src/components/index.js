import angular from 'angular';
import camelcase from 'camelcase';
import path from 'path';

// this is a webpack specific require construct
const reqContext = require.context(
    './', //this directory
    true, //include subdirectories
    /^\.\/(?!index).+?\.js$/ //regex match any .js except this one
);

const components = angular.module( 'components', [] );

reqContext.keys().forEach( key => {
  const name = camelcase( path.basename( key, '.js' ) );
  components.component( name, reqContext( key ).default );
});

export default components.name;
