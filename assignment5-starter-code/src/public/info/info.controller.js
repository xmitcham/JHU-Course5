(function () {
  "use strict";

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['UserDataService', 'ApiPath'];
  function InfoController(UserDataService, ApiPath) {
  var $ctrl = this;
  $ctrl.user = UserDataService.getUser();
  $ctrl.basePath = ApiPath;
  $ctrl.isRegistered = UserDataService.isRegistered();
  }

})();
