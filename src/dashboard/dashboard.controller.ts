/// <reference path="../../typings/angularjs/angular.d.ts" />

/**
 * @ngdoc controller
 * @name DashboardController
 * @module overflow.dashboard
 * @description Main dashboard controller
 **/

module Overflow.Dashboard {

    class DashboardController {
        constructor() {
        }
    }

    angular.module('overflow.dashboard')
        .controller('DashboardController', DashboardController);
}