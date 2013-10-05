'use strict';

angular.module('chattyApp')
  .controller('ChooseCtrl', function ($scope) {
    
    var language = localStorage.getItem('LanguageOrigem');
    
    if ( language != null ) {
    	window.location = window.location + 'list'
    }

    $scope.choose = function( user ) {
  		localStorage.setItem('LanguageOrigem', user.origem );
  		localStorage.setItem('LanguageDestino', user.aprender );
  		window.location = window.location + 'list';
  	};
  });
