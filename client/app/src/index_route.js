app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, ) {

    $locationProvider.hashPrefix('');//hide hashid(%2F) in url: http:../#%2Fmaps

    $routeProvider
        .when('/', {
            //template: '<h2>H2 Template</h2>',//Display dashboard content in ng-view
            templateUrl: 'app/src/controllers/home/home.html', 
            controller: 'home'//Paste title to home page from home.js
        })
        .when('/table', {
            templateUrl: 'app/src/controllers/table/table.html',
            controller: 'table'//Paste title to mable page from table.js
        })
        .when('/maps', {
            templateUrl: 'app/src/controllers/maps/maps.html',
            controller: 'maps'//Paste title to maps page from maps.js
        })
        /*.when('/login', {
            template: '<h2>Login Page</h2>',
            controller: 'maps'//Paste title to maps page from maps.js
        })
        .when('/register', {
            template: '<h2>Register Page</h2>',
            controller: 'maps'//Paste title to maps page from maps.js
        })
        .when('/account', {
            template: '<h2>Account Page</h2>',
            controller: 'account'//Paste title to maps page from maps.js
        })
        .when('/logout', {
            template: '<h2>Logout Page</h2>',
            controller: 'maps'//Paste title to maps page from maps.js
        })
        .otherwise({//error handler
            redirectTo: '/'
        })*/
}])