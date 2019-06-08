
/*
app.service('myCoordinates', '$q', ['$http', function ($http, $q) {
    
    var deferred = $q.defer();

    $http.get('http://ip-api.com/json')
        .success(function (coordinates) {
            var myCoordinates = {};
            myCoordinates.lat = coordinates.lat;
            myCoordinates.lng = coordinates.lon;
            myCoordinates.city = coordinates.city;
            deferred.resolve(myCoordinates);
        })

    return deferred.promise;


    /*
    this.getLocation = function () {//Get data from custom api
        return $http({
            method: 'GET',
            url: 'http://ip-api.com/json'
        }).then(function (response) {//Recieve data to webapp
            return response;
        })
    }
     
    
}]);

*/