'use strict';

angular.module('chattyApp')
  .factory('$getList', function ( $http ) {
    
    // Service logic
    // var url = '/api/frases.json';

    // Public API here
    return {
      listFrases: function ( success ) {

        // $http({method: 'get', url: url}).
        //   success(function( data ) {
        //     console.log( data );
        //     success( data );
        //   }).
        //   error(function() {
        //     console.log( 'error get' );
        //   });
      }
    };
  });
