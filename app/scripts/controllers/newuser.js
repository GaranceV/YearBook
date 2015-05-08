'use strict';

/**
 * @ngdoc function
 * @name yearbookApp.controller:NewuserCtrl
 * @description
 * # NewuserCtrl
 * Controller of the yearbookApp
 */
angular.module('yearbookApp')
  .controller('NewuserCtrl', ['$scope', 'User', function ($scope, User) {
      $scope.master = {};

      $scope.createUser = function(user) {
        //  $scope.master = angular.copy(user);
        console.log(user);
        User.add(user,
            function (bingo) {
              console.log(bingo);
            },
           function (error) {
              console.log(error);
            }
        );
      }

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
  }]);
