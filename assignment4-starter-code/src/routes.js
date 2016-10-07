(function() {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.template.html',
      controller: 'CategoriesController as ctrl',
      resolve: {
        category: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'templates/items.template.html',
      controller: 'ItemsController as ctrl',
      resolve: {
        item: ['$stateParams', 'MenuDataService',
              function($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
              }]
      }
    });
  }
})();
