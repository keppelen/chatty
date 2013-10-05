'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, $http ) {
  	
  	var languageOrigem = localStorage.getItem('LanguageOrigem'),
  			languageDestino = localStorage.getItem('LanguageDestino');
    
  	// Lista JSON das frases
  	$http({method: 'get', url: '/api/' + languageOrigem + '.json'  }).
      success(function( frases ) {
      	$scope.frases = frases;
        $scope.listLanguage( languageDestino );
      }).
      error(function() {
        console.log( 'error get' );
      });

     // Lista JSON do pais do usuário
     $scope.listLanguage = function( value ) {
     	$http({method: 'get', url: '/api/' + languageDestino + '.json'  }).
	      success(function( listLanguage ) {

	        var result = {};
	        var frases = []

	        $.each($scope.frases, function(i, value){

	        	$.each( listLanguage, function(i, langValue){
	        		
	        		if ( value.id == langValue.id ) {
	        				result = '<span class="phrase-local">' + langValue.frase + '</span> <br/> <span class="phrase-foreign">' + value.frase + '</span>'
	        				frases.push( result );
	        		};

	        	});

	        });

	        $scope.result = frases;
	        

	      }).
	      error(function() {
	        console.log( 'error get' );
	      });
     }

  });
