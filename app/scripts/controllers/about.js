'use strict';

/**
 * @ngdoc function
 * @name yearbookApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yearbookApp
 */
angular.module('yearbookApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
