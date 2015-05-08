'use strict';

/**
 * @ngdoc function
 * @name yearbookApp.controller:UserslistCtrl
 * @description
 * # UserslistCtrl
 * Controller of the yearbookApp
 */
angular.module('yearbookApp')
    .controller('UsersListCtrl', ['$scope', '$window', 'User', function ($scope, $window, User) {
        $scope.deleteU = function() {
            User.delete($scope.theUId,
            function(error) {
                console.log(error);
            });
            $window.location.reload();
        };

        $scope.updateUser = function () {
            //    get: function (userId, successCB, failCB) { //successCB & fail sont des fonctions qu'on appelle avec des params
            console.log('beginning of updateUser, the userID : '+ $scope.theUId+'\n');
            User.get($scope.theUId,
                function (result) {
                    console.log('made it!\n');
                    console.log('the result :  ' + result+ '\n');
                    $scope.theUserToUpgrade = result;
                },
                function (error) {
                    console.log(error);
                    $scope.theUserToUpgrade = 'rate!';
                });

            console.log('result : ' + $scope.theUserToUpgrade+'\n');
            $window.location.reload();
        };


        //en premier arg, ma fonction quand c'est un succes
        User.all(function (users) { // là on appelle le service : ne renvoie rien en soit
                $scope.theUsers = users; //on met dans une var globale au scope le résultat de la fonction
            },
            //en 2è arg, la fonction quand c'est un échec
            function (error) {
                console.log(error); //ici normalement, besoin de gérer les erreurs :
                //par ex on remplit un $scope.error où on donne d'autres infos
            });
        $scope.getTheUserId = function(hisId) {
            $scope.theUId = hisId;
            console.log('ok with '+ $scope.theUId);
        };
    }
    ]);

