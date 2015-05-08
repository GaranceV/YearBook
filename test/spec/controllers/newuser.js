'use strict';

describe('Controller: NewuserCtrl', function () {

  // load the controller's module
  beforeEach(module('yearbookApp'));

  var NewuserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewuserCtrl = $controller('NewUserCtrl', {
      $scope: scope
    });
  }));

});
