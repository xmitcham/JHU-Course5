(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'templates/categoriesList.template.html',
    bindings: {
      category: '<'
    }
  });


})();
