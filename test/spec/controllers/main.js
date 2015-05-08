'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yearbookApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) { //permet d'injecter des services de l'app dans le test
    scope = $rootScope.$new(); //rootscope permet de cr�er le scope automatiquement dans l'appli, l� on doit le faire � la main
                      //pour r�cup�rer le scope
    MainCtrl = $controller('MainCtrl', { //idem, on r�cup le contr�leur
      $scope: scope
    });
  }));


});
