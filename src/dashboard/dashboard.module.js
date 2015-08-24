/**
 * @ngdoc module
 * @name overflow.dashboard
 * @module overflow
 * @description Primary module for dashboard
 **/

(function() {
    'use strict';

    angular.module('overflow.dashboard', [
        'overflow.core',
        'overflow.character'
    ]);

    angular.module('overflow.dashboard')
        .config(dashboardRoutes);

    /* @ngInject */
    function dashboardRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: 'src/dashboard/dashboard.html',
                controller: 'DashboardController as vm'
            });

        $urlRouterProvider.otherwise('/');
    }
})();
