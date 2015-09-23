/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/**
 * @ngdoc module
 * @name overflow.login
 * @module overflow.login
 * @description Controls interactions between API and user for performing user authentication and session creation
 **/
var ov;
(function (ov) {
    'use strict';
    angular.module('overflow.login', [
        'overflow.core'
    ]);
    angular.module('overflow.login').config(LoginRoutes);
    var LoginRoutes = (function () {
        /* @ngInject */
        function LoginRoutes($stateProvider, $urlRouterProvider) {
            $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'src/login/login.html',
                controller: 'LoginController as vm'
            });
            $urlRouterProvider.otherwise('/');
        }
        return LoginRoutes;
    })();
})(ov || (ov = {}));
//# sourceMappingURL=login.module.js.map