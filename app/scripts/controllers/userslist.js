'use strict';

/**
 * @ngdoc function
 * @name yearbookApp.controller:UserslistCtrl
 * @description
 * # UserslistCtrl
 * Controller of the yearbookApp
 */
angular.module('yearbookApp')
    .controller('UsersListCtrl', ['$scope', 'User', function ($scope, User) {
        $scope.deleteU = function(userId) {
            User.delete(userId);
        }


        //en premier arg, ma fonction quand c'est un succes
        User.all(function (users) { // là on appelle le service : ne renvoie rien en soit
                $scope.theUsers = users; //on met dans une var globale au scope le résultat de la fonction
            },
            //en 2è arg, la fonction quand c'est un échec
            function (error) {
                console.log(error); //ici normalement, besoin de gérer les erreurs :
                //par ex on remplit un $scope.error où on donne d'autres infos
            });
    }]);

