(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['category'];
  function CategoriesController(category) {
    var ctrl = this;

    ctrl.categories = category;
  }

})();
