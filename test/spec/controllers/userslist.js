'use strict';

describe('Controller: UserslistCtrl', function () {

  // load the controller's module
  beforeEach(module('yearbookApp'));

  var UserslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserslistCtrl = $controller('UserslistCtrl', {
      $scope: scope
    });
  }));


});
