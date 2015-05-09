'use strict';

/**
 * Created by Garance on 20/04/2015.
 */


angular.module('yearbookApp')
    .factory('User', ['$http', function ($http) {
    var obj = {
        add: function(userInfo, successCB, failCB) {
            $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users/', userInfo)
                .success(function (result) {
                    if (result.status == 'success') {
                        //we can also check that the values are what we actually sent
                        successCB(result.data);
                    }
                    else {
                        failCB(result.data);
                    }
                    ;
                })
                .error(failCB);
        },
        get: function (userId, successCB, failCB) { //successCB & fail sont des fonctions qu'on appelle avec des params
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId)
                .success(function (result) {
                    if (result.status == 'success') {
                        //we can also check that the values are what we actually sent
                        console.log('success');
                        console.log(result.data);
                        successCB(result.data);
                    }
                    else {
                        failCB(result.data);
                    };
                })
                .error(failCB()); //en cas d'erreur, on appelle la fonction failCB avec en param la fonction error, qui
                    //sera appelée ensuite dans mon controller
                    //console.log(error); pas de console log ici

        },
        update: function (userId, newData, successCB, failCB) {
            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+userId, newData)
                .success(function (result) {
                    if (result.status == 'success') {
                        //we can also check that the values are what we actually sent
                        successCB(result.data);
                    }
                    else {
                        failCB(result.data);
                    }
                    ;
                })
                .error(failCB);
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

/*    premiere ligne du get
        var successFunc = function (Result) { //ici, fonction qui s'appelle successFunc
 //(function (Result) { exemple : ici fonction anonyme
 if (Result.status == 'success') {
 console.log(Result.data)//on parse le json déjà, pour voir ce qu'il répond
 successCB(Result.data);
 }
 else {
 failCB(Result.data)
 }
 ;
 }; */