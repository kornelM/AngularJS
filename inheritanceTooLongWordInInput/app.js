var app = angular.module('app', []);

app.controller("MainController", function($scope){
    $scope.myData = {val: "kornel"}
    
    $scope.$watch('myData.val', function(newval){
//        console.log("got here");
        $scope.myData.toolong = newval.length >15;
    })

})

