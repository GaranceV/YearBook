'use strict';

/**
 * @ngdoc function
 * @name yearbookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yearbookApp
 */
angular.module('yearbookApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
