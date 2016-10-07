(function () {
  'use strict';

  angular.module('Data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBase'];
  function MenuDataService($http, ApiBase) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
        method: "GET",
        url: (ApiBase + "/categories.json")
      }).then(function(response) {
        return response.data;
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: "GET",
        url: (ApiBase + "/menu_items.json?category="),
        params: {
          category: categoryShortName
        }
      }).then(function(response) {
        return {items: response.data.menu_items, categoryName: response.data.category.name};
      });
    };
  }
})();
