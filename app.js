(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = [];
  
  
  $scope.menuCheck = function () {
    $scope.menuSplit = $scope.menu.split(',');  
   if ($scope.menuSplit == 0 ) {
      $scope.message = "Please enter data first."
    }else if ($scope.menuSplit.length <=3) {
      $scope.message = "Enjoy!";
    }else{
      $scope.message = "Too much!";
    }
  };

}

})();
