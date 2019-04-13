app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, ) {

    $locationProvider.hashPrefix('');//hide hashid(%2F) in url: http:../#%2Fmaps

    $routeProvider
        .when('/', {
            template: '<h2>Dashboard</h2>',
            controller: 'home'//Paste title to home page from home.js
        })
        .when('/table', {
            template: '<h2>Table</h2>',
            controller: 'table'//Paste title to mable page from table.js
        })
        .when('/maps', {
            template: '<h2>Maps</h2>',
            controller: 'maps'//Paste title to maps page from maps.js
        })
}])