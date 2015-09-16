/**
 * @ngdoc controller
 * @name MainController
 * @module overflow
 * @description Global controller for interacting with main module and global state
 **/

(function() {
    'use strict';

    angular.module('overflow')
        .controller('MainController', mainController);

    /* @ngInject */
    function mainController($rootScope) {
        activate();

        function activate() {
            $rootScope.hideNav = false;
            $rootScope.$on('$stateChangeStart', handleStateChangeStart);
        }

        ///////////////////////////////////////////////////////////////////////

        function handleStateChangeStart(event, toState, toParams, fromState, fromParams) {
            $rootScope.hideNav = false;
        }
    }
})();
