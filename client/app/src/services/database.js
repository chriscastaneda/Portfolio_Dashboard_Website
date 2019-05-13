app.service('database', ['$http', function ($http) {
    this.testData = function () {//Get data from custom api
        return $http({
            method: 'GET',
            url: 'http://localhost:4000/products/test'
        }).then(function (response) {//Recieve data to webapp
            return response;
        })
    }/*
    this.createData = function () {//Get data from custom api
        return $http({
            method: 'POST',
            data: {
                name: "oranges",
                price: 10,
                firstname: "Jane",
                lastname: "doe",
                device: "IE",
                x: 32,
                y: 34
            },
            url: 'http://localhost:4000/products/create'
        }).then(function (response) {//Recieve data to webapp
            return response;
        })
    }*/
    this.readData = function () {//Get data from custom api
        return $http({
            method: 'GET',
            url: 'http://localhost:4000/products/5cd8a151d637ef3930231ba9'
        }).then(function (response) {//Recieve data to webapp
            return response;
        })
    }/*
    this.updateData = function () {//Get data from custom api
        return $http({
            method: 'PUT',
            data: {
                name: "banana",
                price: 100,
                firstname: "Danny",
                lastname: "Dahi",
                device: "Safari",
                x: 320,
                y: 340
            },
            url: 'http://localhost:4000/products/5cd8d0d4d637ef3930231bad/update'
        }).then(function (response) {//Recieve data to webapp
            return response;
        })
    }*/
    this.deleteData = function () {//Get data from custom api
        return $http({
            method: 'DELETE',
            url: 'http://localhost:4000/products/5cd8a00d1c8175354cf5ff35/delete'
        }).then(function (response) {//Recieve data to webapp
            return response;
        })
    }
}]);