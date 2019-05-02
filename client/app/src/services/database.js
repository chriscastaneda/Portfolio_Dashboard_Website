app.service('database', ['$http', function ($http) {
    this.getData = function () {//Get data from custom api
        return $http({
            method: 'GET',
            url: 'http://localhost:4000/products/test'
        }).then(function (response) {//Recieve data to webapp
            return response;
        })
    }
}]);