/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />

/**
 * @ngdoc module
 * @name overflow.login
 * @module overflow.login
 * @description Controls interactions between API and user for performing user authentication and session creation
 **/

module ov {
    'use strict';

    angular.module('overflow.login', [
        'overflow.core'
    ]);

    angular.module('overflow.login')
        .config(LoginRoutes);

    class LoginRoutes {
        /* @ngInject */
        constructor($stateProvider : angular.ui.IStateProvider, $urlRouterProvider : angular.ui.IUrlRouterProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'src/login/login.html',
                    controller: 'LoginController as vm'
                });

            $urlRouterProvider.otherwise('/');
        }
    }
}