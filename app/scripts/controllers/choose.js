'use strict';

angular.module('chattyApp')
  .controller('ChooseCtrl', function ($scope, $http) {
    
    var language = localStorage.getItem('LanguageOrigem');
    
    if ( language != null ) {
    	window.location = window.location + 'list'
    }

    $scope.choose = function( user ) {
  		localStorage.setItem('LanguageOrigem', user.origem );
  		localStorage.setItem('LanguageDestino', user.aprender );
  		window.location = window.location + 'list';
  	};


    // 
    var languageOrigem = localStorage.getItem('LanguageOrigem'),
        languageDestino = localStorage.getItem('LanguageDestino'),
        languageBrowser = navigator.language;

    // Lista JSON das frases
    $scope.getLanguage = function() {
      $http({method: 'get', url: '/api/' + languageBrowser.split("-")[0] + '.json'  }).
        success(function( data ) {
          $scope.ux = data.ux;
          console.log( "lakdkja" );
        }).
        error(function() {
          languageBrowser = "en";
          $scope.getLanguage();
        });
    }

    $scope.getLanguage();
    
  });
