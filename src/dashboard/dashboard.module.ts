/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />

/**
 * @ngdoc module
 * @name overflow.dashboard
 * @module overflow
 * @description Primary module for dashboard
 **/

module Overflow.Dashboard {

    class DashboardRoutes {
        /* @ngInject */
        constructor($stateProvider : angular.ui.IStateProvider, $urlRouterProvider : angular.ui.IUrlRouterProvider) {
            $stateProvider
                .state('dashboard', {
                    url: '/',
                    templateUrl: 'src/dashboard/dashboard.html',
                    controller: 'DashboardController as vm'
                });

            $urlRouterProvider.otherwise('/');
        }
    }

    angular.module('overflow.dashboard', ['overflow.core'])
        .config(DashboardRoutes);
}
