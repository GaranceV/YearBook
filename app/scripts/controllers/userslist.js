'use strict';

/**
 * @ngdoc function
 * @name yearbookApp.controller:UserslistCtrl
 * @description
 * # UserslistCtrl
 * Controller of the yearbookApp
 */
angular.module('yearbookApp',[])
    .controller('UserslistCtrl', ['$scope', 'User', function ($scope, User) {
        //en premier arg, ma fonction quand c'est un succes
        $scope.users = User.all(function (users) { // là on appelle le service
                $scope.users = users; //on met dans une var globale au scope le résultat de la fonction
            },
            //en 2è arg, la fonction quand c'est un échec
            function (error) {
                console.log(error);
            });
    }]);

