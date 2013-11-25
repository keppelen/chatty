'use strict';

describe('Controller: ChosseCtrl', function () {

  // load the controller's module
  beforeEach(module('chattyApp'));

  var ChosseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChosseCtrl = $controller('ChosseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
