'use strict';

/**
 * @ngdoc overview
 * @name yearbookApp
 * @description
 * # yearbookApp
 *
 * Main module of the application.
 */
angular
    .module('yearbookApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/users', {
                templateUrl: 'views/users.html',
                controller: 'UsersListCtrl'
            })
            .when('/newuser', {
                templateUrl: 'views/newUser.html',
                controller: 'NewuserCtrl'
            })
            .when('/updateUser', {
                templateUrl: 'views/updateuser.html',
                controller: 'updateuserCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
