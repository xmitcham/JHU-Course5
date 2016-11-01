(function () {
  "use strict";

  angular.module('public')
  .service('UserDataService', UserDataService);

  function UserDataService() {
    var service = this;
    var data = {};

    service.saveInfo = function(user) {
      data = user;
    };


    service.getUser = function() {
      return data;
    };

    service.isRegistered = function() {
      return Object.keys(data).length > 0;;
    };
  }
})();
