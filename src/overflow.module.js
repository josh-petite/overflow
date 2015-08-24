/**
 * @ngdoc module
 * @name overflow
 * @module overflow
 * @description Primary module for overflow application. Houses a single wrapper controller
 *              for handing global eventing.
 **/

(function() {
    'use strict';

    angular.module('overflow', [
        'overflow.core',
        'overflow.dashboard'
    ]);

    angular.module('overflow')
        .controller('MainController', mainController);

    /* @ngInject */
    function mainController($scope, NotificationService) {
        $scope.$on('$stateChangeStart', handleStateChangeStart);

        /*jshint unused:false */
        function handleStateChangeStart(event, toState, toParams, fromState, fromParams) {
            NotificationService.clearNotifications();
        }
    }
})();
