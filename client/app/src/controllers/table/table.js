app.controller('table', ['$scope', 'dashboard', function ($scope, dashboard) {

	$scope.title = 'Table List';//Page title
	dashboard.title = $scope.title; //send to route.js
}])