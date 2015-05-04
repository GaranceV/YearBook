'use strict';

/**
 * Created by Garance on 20/04/2015.
 */


angular.module('yearbookApp')
    //  .controller('MainCtrl', function ($scope) {
    .factory('User', ['$http', function ($http) {
    var obj = {
        get: function (userId, successCB, failCB) { //successCB & fail sont des fonctions qu'on appelle avec des params
            var successFunc = function (Result) { //ici, fonction qui s'appelle successFunc
                //(function (Result) { exemple : ici fonction anonyme
                if (Result.status === 'success') { //on parse le json déjà, pour voir ce qu'il répond
                    successCB(Result.data);
                }
                else {
                    failCB(Result.data)
                }
                ;
            };
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId)
                .success(successFunc) //success est une méthode qui attend en param une fonction
                //pas anonyme cette fois-ci, on utilise celle qu'on a défini + haut

                .error(function (error) {
                    failCB(error); //en cas d'erreur, on appelle la fonction failCB avec en param la fonction error, qui
                    //sera appelée ensuite dans mon controller
                    //console.log(error); pas de console log ici
                });
        },
        delete: function (userId, failCB) {
            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId)
                .success(function (result) {
                    if (result.status != 'success') {
                        failCB(result);
                    }
                    //console.log(Result);
                    //glop
                })
                .error(failCB);
        },

        all: function (successCB, failCB) {
            //on les appelle comme on veut
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
                .success(function (result) {
                    if (result.status == 'success') { //on parse le json déjà, pour voir ce qu'il répond
                        successCB(result.data);
                    }
                    else {
                        failCB(result.data)
                    }
                    ;
                })
                .error(failCB);
        }
    };
    return obj;
}]);

