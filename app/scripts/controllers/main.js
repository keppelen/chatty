'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, $http ) {

  	localStorage.setItem('chattyLenguage', 'en');
  	var language = localStorage.getItem('chattyLenguage');
    
  	// Lista JSON das frases
  	$http({method: 'get', url: '/api/frases.json'  }).
      success(function( frases ) {
      	$scope.frases = frases;
        $scope.listLanguage( language )
      }).
      error(function() {
        console.log( 'error get' );
      });

     // Lista JSON do pais do usuário
     $scope.listLanguage = function( value ) {
     	$http({method: 'get', url: '/api/' + value + '.json'  }).
	      success(function( listLanguage ) {

	        var result = {};
	        var frases = []

	        $.each($scope.frases, function(i, value){

	        	$.each( listLanguage, function(i, langValue){
	        		
	        		if ( value.id == langValue.id ) {
	        				result = value.frase + '<span>' +langValue.frase + '</span>'
	        				frases.push( result );
	        		};

	        	});

	        });

	        $scope.result = frases;
	        console.log( frases );
	        

	      }).
	      error(function() {
	        console.log( 'error get' );
	      });
     }

  });
