'use strict';

/**
 * Created by Garance on 20/04/2015.
 */


angular.module('User')
    //  .controller('MainCtrl', function ($scope) {
    .factory ('User', ['$http', function ($http) {
        var obj = {
            get: function (userId) {
                $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+userId)
                    .success(function (Result) {
                        if (Result.status === 'success') { //on parse le json déjà, pour voir ce qu'il répond
                           return Result.data;
                        }
                    })

                    .error(function (error) {
                        console.log(error);
                    });
            },
            delete: function (userId) {
                $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+userId)
                    .success(function (Result) {
                        console.log(Result);
                        //glop
                    })
                    .error(function (error) {
                        console.log(error);
                        //pas glop
                    });
            },
            all: function (successCB, failCB) {
                //on les appelle comme on veut
              $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
                  .success(successCB)
                  .error(failCB);
                }
        };
        return obj;
    }]);

