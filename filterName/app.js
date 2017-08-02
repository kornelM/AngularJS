var app = angular.module('app', []);

app.controller("MainController", function($scope){
// $scope.mydata = {arr: ["jake", "kate", "mikey"]}
 
    $scope.mydata = {arr: [{name:"jake", age: 12}, {name: "kate", age: 54}, {name: "mikey", age: 90}
                    ]}
 
 
})


