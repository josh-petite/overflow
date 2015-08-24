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
        /*jshint validthis: true */
        var vm = this;
        vm.greeting = 'hello from dashboard controller!';

        activate();

        function activate() {
        }

        /////////////////////////////////////////////////////////////////////////////
    }
})();
