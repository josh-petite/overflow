/**
 * @ngdoc controller
 * @name DashboardController
 * @module overflow.dashboard
 * @description Main dashboard controller
 **/

(function() {
    'use strict';

    angular.module('overflow.dashboard')
        .controller('DashboardController', dashboardController);

    /* @ngInject */
    function dashboardController() {
        var vm = this;

        activate();

        function activate() {
        }

        ///////////////////////////////////////////////////////////////////////
    }
})();
