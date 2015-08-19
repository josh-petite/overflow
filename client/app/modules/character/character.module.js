/**
 * Created by Josh on 7/6/15.
 */

/**
 * @ngdoc module
 * @name overflow.character
 * @module overflow
 * @description Primary module for character-specific interactions
 **/
angular.module('overflow.character', ['overflow.core']);

angular.module('overflow.character').config(characterRoutes);

/* @ngInject */
function characterRoutes($stateProvider, $urlRouterProvider) {
  'use strict';

  $stateProvider
    .state('character', {
      url: '/character',
      templateUrl: 'client/app/modules/character/character.html',
      controller: 'characterController as vm'
    });

  $urlRouterProvider.otherwise('/');
}
