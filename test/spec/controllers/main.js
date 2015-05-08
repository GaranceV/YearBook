'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yearbookApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) { //permet d'injecter des services de l'app dans le test
    scope = $rootScope.$new(); //rootscope permet de créer le scope automatiquement dans l'appli, là on doit le faire à la main
                      //pour récupérer le scope
    MainCtrl = $controller('MainCtrl', { //idem, on récup le contrôleur
      $scope: scope
    });
  }));


});
