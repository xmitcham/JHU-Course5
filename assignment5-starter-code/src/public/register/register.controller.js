(function () {
  "use strict";

  angular.module('public')
  .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['MenuService', 'UserDataService'];
  function RegisterController (MenuService, UserDataService) {
    var $ctrl = this;
    $ctrl.user = {};
    $ctrl.notFound = false;
    $ctrl.isSaved = false;

    $ctrl.submit = function() {
      //console.log($ctrl.user);
      //console.log($ctrl.user.shortname);
      MenuService.getFavDish($ctrl.user.shortname)
      .then(function(item) {
        $ctrl.user.item = item;
        //console.log($ctrl.user.item);
        UserDataService.saveInfo($ctrl.user);
        $ctrl.isSaved = true;
      })
      .catch(function() {
        $ctrl.notFound = true;
      });
    };

    $ctrl.resetFind = function() {
      $ctrl.notFound = false;
    };
  }

})();
