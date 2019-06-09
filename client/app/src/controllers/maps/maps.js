app.controller('maps', ['$scope', 'dashboard', function($scope, dashboard) {

    $scope.title = 'Maps';//Page title
    dashboard.title = $scope.title; //send to route.js
}])