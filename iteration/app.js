

var app = angular.module('app', []);

app.controller("MainController", function($scope){
    $scope.myarr = [1,2,3,4,5,5,7,8,9,6]
    
    $scope.users = [{name:"kornel", age: 23}, {name:"konrad", age: 24},{name:"kordian", age: 25}, {name:"kordian", age: 25}]
    
    $scope.ob = {name:"justyna", age:25, title: "master degree"};
    
})