app.controller('home', ['$scope', 'dashboard', 'database', function ($scope, dashboard, database) {

    $scope.title = 'The Dashboard Project: Guest';//Page title
    dashboard.title = $scope.title; //send to route.js

    database.getData().then(function(books){//Store data to $scope.array
        console.log(books.data);//check if data has recieved
        $scope.books = books.data;
    })
}]);