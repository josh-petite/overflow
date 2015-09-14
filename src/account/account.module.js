/**
 * @ngdoc module
 * @name overflow.account
 * @module overflow.account
 * @description Module for handling user interaction with account creation and management
 **/

(function() {
    'use strict';

    angular.module('overflow.account', [
        'overflow.core'
    ]);

    angular.module('overflow.account')
        .config(accountRoutes);

    /* @ngInject */
    function accountRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('createAccount', {
                url: '/account/create',
                templateUrl: 'src/account/create.html',
                controller: 'CreateAccountController as vm'
            });

        $urlRouterProvider.otherwise('/');
    }
})();
