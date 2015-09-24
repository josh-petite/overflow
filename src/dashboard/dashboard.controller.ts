/// <reference path="../../typings/angularjs/angular.d.ts" />

/**
 * @ngdoc controller
 * @name DashboardController
 * @module overflow.dashboard
 * @description Main dashboard controller
 **/

module Overflow.Dashboard {
    angular.module('overflow.dashboard')
        .controller('DashboardController', DashboardController);

    class DashboardController {
        /* @ngInject */
        constructor() {
        }
    }
}