app.controller('home', ['$scope', 'dashboard', function($scope, dashboard){

    $scope.title = 'Dashboard';//Page title
    dashboard.title = $scope.title; //send to route.js
}])