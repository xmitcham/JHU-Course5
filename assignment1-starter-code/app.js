(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunch = "";
        $scope.message = "";

        $scope.getMessage = function () {
            $scope.lunch = $scope.lunch;
            $scope.list = $scope.lunch.split(',')
            if ($scope.lunch === "") {
                $scope.message = "Please enter data first";
            } else if ($scope.list.length < 4) {
              $scope.message = "Enjoy!";
            } else {
              $scope.message = "Too much!";
            }
        };
    }

})();
