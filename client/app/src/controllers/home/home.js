app.controller('home', ['$scope', 'dashboard', 'database', function ($scope, dashboard, database) {

    $scope.title = 'The Dashboard Project: Guest';//Page title
    dashboard.title = $scope.title; //send to route.js

    database.testData().then(function (Json){//Store data to $scope.array
        console.log(Json.data);//check if data has recieved
    })
    /*
    database.createData().then(function (Json) {//Store data to $scope.array
        //$scope.Json = Json.data; //Save json data Locally
        console.log(Json.data);//view Json inside array
    })*/

    database.readData().then(function (Json) {//Store data to $scope.array
        $scope.Json = Json.data; //Save json data Locally
        console.log($scope.Json);//view Json inside array
    })
    /*
    database.updateData().then(function (Json) {//Store data to $scope.array
        //$scope.Json = Json.data; //Save json data Locally
        console.log(Json.data);//view Json inside array
    })
    */
    database.deleteData().then(function (Json) {//Store data to $scope.array
        //$scope.Json = Json.data; //Save json data Locally
        console.log(Json.data);//view Json inside array
    })
}]);