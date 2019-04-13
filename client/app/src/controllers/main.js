app.controller('main', ['$scope', '$location', 'dashboard', 
    function ($scope, $location, dashboard) { //['$scope',..] handle minify

    $scope.$on('$routeChangeStart', function () {//console log everytime route changes

        $scope.page = $location.path();//send page content to current view
        $scope.title = dashboard.getTitle;//read title from pages.js
    }) 
}])
