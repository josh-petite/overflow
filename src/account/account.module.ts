/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />

/**
 * @ngdoc module
 * @name overflow.account
 * @module overflow.account
 * @description Module for handling user interaction with account creation and management
 **/

module Overflow.Account {
    class AccountRouteConfiguration {
        constructor($stateProvider : angular.ui.IStateProvider, $urlRouterProvider : angular.ui.IUrlRouterProvider) {
            $stateProvider
                .state('createAccount', {
                    url: '/account/create',
                    templateUrl: 'src/account/create.html',
                    controller: 'CreateAccountController as vm'
                });

            $urlRouterProvider.otherwise('/');
        }
    }

    AccountRouteConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular.module('overflow.account', ['overflow.core'])
        .config(AccountRouteConfiguration);
}
