var app = angular.module('app', []);

app.controller("MainController", function($scope, $filter){
// $scope.mydata = {arr: ["jake", "kate", "mikey"]}
 
    $scope.mydata = {arr: [{name:"jake", age: 99}, {name: "kate", age: 54}, {name: "mikey", age: 90},{name: "kornel", age: 22},{name: "kordian", age: 76}, {name: "konrad", age: 34}
                    ]}
    
    console.log($filter('uppercase')('make this string uppercase!'));
 
 
})


