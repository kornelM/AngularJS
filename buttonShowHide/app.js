/*angular.module('app', [])
.controller("MainController", MainController);

MainController.$inject = ["$scope"];

function MainController ($scope) {
    $scope.val = "test123"
    $scope.func = function (){
        return "abc" + "def";
    }
}*/

var app = angular.module('app', ['controllers']);

/*app.controller("MainController", function($scope) {
    $scope.val = "test342"
})*/

//proper way to declare modules!
angular.module("controllers", []).controller("MainController", function($scope){
    $scope.val = 1;
    $scope.even = false;
    
    $scope.inc = function(){
        $scope.val +=1;
        $scope.even = $scope.val % 2 == 0;
    }
    
    
    /*$scope.isEven = function(){
        return $scope.val%2 == 0;
    }*/
    

    
})