(function() {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'templates/itemsList.template.html',
    bindings: {
      categoryName: '@',
      item: '<'
    }
  });

})();
