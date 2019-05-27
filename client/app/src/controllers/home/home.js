app.controller('home', ['$scope', 'dashboard', 'database', function ($scope, dashboard, database) {

    $scope.title = 'The Dashboard Project: Guest';//Page title
    dashboard.title = $scope.title; //send to route.js

    database.testData().then(function (object) {//Store data to $scope.array
        console.log(object.data);//check if data has recieved
    })
    /*
    database.createData().then(function (object) {//Store data to $scope.array
        //$scope.object = object.data; //Save json data Locally
        console.log(object.data);//view Json inside array
    })*/

    database.readData().then(function (object) {//Store data to $scope.array
        $scope.object = object.data; //Save json data Locally
        console.log($scope.object);//view Json inside array
    })
    /*
    database.readDatabyid().then(function (object) {//Store data to $scope.array
        $scope.object = object.data; //Save json data Locally
        console.log($scope.object);//view Json inside array
    })
    
    database.updateData().then(function (object) {//Store data to $scope.array
        //$scope.object = object.data; //Save json data Locally
        console.log(object.data);//view Json inside array
    })
    
    database.deleteData().then(function (object) {//Store data to $scope.array
        //$scope.object = object.data; //Save json data Locally
        console.log(object.data);//view Json inside array
    })*/






   

   $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
   $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: false,
                    position: 'right'
                }
            ]
        }
    };
    /*
    // Simulate async data update
    $timeout(function () {
        $scope.data = [
            [28, 48, 40, 19, 86, 27, 90],
            [65, 59, 80, 81, 56, 55, 40]
        ];
    }, 3000);*/

}]);