/**
 * Created by Josh on 7/5/15.
 */

/**
 * @ngdoc module
 * @name overflow.dashboard
 * @module overflow
 * @description Primary module for dashboard
 **/
angular.module('overflow.dashboard', [
  'overflow.core',
  'overflow.character'
]);

angular.module('overflow.dashboard').config(dashboardRoutes);

/* @ngInject */
function dashboardRoutes($stateProvider, $urlRouterProvider) {
  'use strict';

  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: 'src/app/modules/dashboard/dashboard.html',
      controller: 'dashboardController as vm'
    });

  $urlRouterProvider.otherwise('/');
}
