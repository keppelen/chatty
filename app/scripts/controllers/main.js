'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, $http ) {
    
    var languageOrigem = localStorage.getItem('LanguageOrigem'),
        languageDestino = localStorage.getItem('LanguageDestino');
    
    // Lista JSON das frases
    $http({method: 'get', url: '/api/' + languageOrigem + '.json'  }).
      success(function( data ) {
        $scope.languageOrigem = data;
        $scope.listLanguage( languageDestino );
      }).
      error(function() {
        // error
      });

     // Lista JSON do pais do usuário
     $scope.listLanguage = function( value ) {
      $http({method: 'get', url: '/api/' + languageDestino + '.json'  }).
        success(function( langDestino ) {

          var result = {},
              frases = [];

          for (var i = 0, len = $scope.languageOrigem.length; i < len; i++) {
            if ($scope.languageOrigem[i].id == langDestino[i].id) {
              result = '<span class="phrase-local">' + $scope.languageOrigem[i].frase + '</span> <br/> <span class="phrase-foreign">' + langDestino[i].frase + '</span>';
              frases.push( result );
            } 
          };

          $scope.result = frases;

        }).
        error(function() {
          // error
        });
     }
  });
