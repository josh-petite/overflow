/// <reference path="../../typings/angularjs/angular.d.ts" />

/**
 * @ngdoc module
 * @name overflow.login
 * @module overflow.login
 * @description Controls interactions between API and user for performing user authentication and session creation
 **/

module fl {
    'use strict';

    angular.module('overflow.login', [
        'overflow.core'
    ]);

    angular.module('overflow.login')
        .config(loginRoutes);

    /* @ngInject */
    function loginRoutes($stateProvider, $urlRouterProvider) : void {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'src/login/login.html',
                controller: 'LoginController as vm'
            });

        $urlRouterProvider.otherwise('/');
    }
}