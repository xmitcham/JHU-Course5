(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'founditems.template.html',
      scope: {
        items: '<',
        onRemove: '&',
        nothingFound: '<'
      }
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var list = this;

    list.searchTerm = "";
    list.found = [];
    list.nothingFound = false;

    list.search = function() {
      if(list.searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
        promise.then(function(result) {
          list.found = result;
          list.nothingFound = false;

          if(list.found.length == 0){
            list.nothingFound = true;
          }
        }).catch(function(error) {
          console.log("Something went wrong: ", error);
        })
      }
      else {
        list.found = [];
        list.nothingFound = true;
      }
      list.searchTerm = "";
    };

    list.removeItem = function(index){
      list.found.splice(index, 1);
    };
  }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function(result) {
        var foundItems = [];
        result.data.menu_items.forEach(function(item) {
          if (item.description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(item);
          }
        });

        return foundItems;
      });
    };
  }
})();
