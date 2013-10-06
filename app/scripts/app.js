'use strict';

angular.module('chattyApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/choose.html',
        controller: 'ChooseCtrl'
      })
      .when('/list', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/config', {
        templateUrl: 'views/config.html',
        controller: 'ConfigCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
