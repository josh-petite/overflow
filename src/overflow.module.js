/**
 * Created by Josh on 7/5/15.
 */

/**
 * @ngdoc module
 * @name overflow
 * @module overflow
 * @description Primary module for overflow application. Houses a single wrapper controller
 *              for handing global eventing.
 **/
angular.module('overflow', [
  'overflow.core',
  'overflow.dashboard'
]);

angular.module('overflow').controller('MainController', mainController);

/* @ngInject */
function mainController($scope) {
  'use strict';

  $scope.$on('$stateChangeStart', handleStateChangeStart);

  function handleStateChangeStart(event, toState, toParams, fromState, fromParams) {
    console.log(fromParams);
  }
}
