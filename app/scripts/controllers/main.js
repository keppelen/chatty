'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, $http ) {
    
    var languageOrigem = localStorage.getItem('LanguageOrigem'),
        languageDestino = localStorage.getItem('LanguageDestino');
    
    // Lista JSON das frases
    $http({method: 'get', url: '/api/' + languageOrigem + '.json'  }).
      success(function( data ) {
        $scope.languageOrigem = data.phrases;
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
            if ($scope.languageOrigem[i].id == langDestino.phrases[i].id) {
              result = '<span class="phrase-local">' + $scope.languageOrigem[i].frase + '</span> <br/> <span class="phrase-foreign">' + langDestino.phrases[i].frase + '</span>';
              frases.push( result );
            } 
          };

          $scope.result = frases;

        }).
        error(function() {
          // error
        });
     }

     // Get Linguagem
      var languageBrowser = navigator.language;

      // Lista JSON das frases
      $scope.getLanguage = function() {
        $http({method: 'get', url: '/api/' + languageBrowser.split("-")[0] + '.json'  }).
          success(function( data ) {
            $scope.ux = data.ux;
          }).
          error(function() {
            languageBrowser = "en";
            $scope.getLanguage();
          });
      }

      $scope.getLanguage();


    // Nav
    var nav = document.querySelector('.nav>a'),
        choose = document.querySelector('.choose'),
        save = document.querySelector('.btn-save');

    nav.addEventListener('click', function(e) {
      choose.className = choose.className + " active";
    });

    save.addEventListener('click', function(e) {
      choose.className = choose.className - " active";
    });
    
  });
