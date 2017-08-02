var app = angular.module('app', []);

app.controller("MainController", function($scope, $filter){
// $scope.mydata = {arr: ["jake", "kate", "mikey"]}
 
    $scope.mydata = {arr: [{name:"jake", age: 5}, {name: "kate", age: 54}, {name: "mikey", age: 90},{name: "kornel", age: 22},{name: "kordian", age: 76}, {name: "konrad", age: 34}
                    ]}
})

app.filter('charlimit', function(){
    return function(input, length){
        if (!length){
            length = 10;
        }
         if (!input){
            return input;
        }
         if (input.length <= length){
            return input;
        }
        else{
            return input.substring(0, length) + '...';
        }
    }
})

app.filter('candrink', function(){
    return function(data, minage){
        var filtered = [];
        if (!minage){
            minage = 0;
        }
        for (var i = 0; i<data.length; i++){
            var value = data[i];
            
            if (value.age >= minage){
                filtered.push(value);
            }
        }
        return filtered;
    }
})

