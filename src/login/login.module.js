/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/**
 * @ngdoc module
 * @name overflow.login
 * @module overflow.login
 * @description Controls interactions between API and user for performing user authentication and session creation
 **/
var Overflow;
(function (Overflow) {
    var Login;
    (function (Login) {
        var LoginRouteConfiguration = (function () {
            /* @ngInject */
            function LoginRouteConfiguration($stateProvider, $urlRouterProvider) {
                $stateProvider.state('login', {
                    url: '/login',
                    templateUrl: 'src/login/login.html',
                    controller: 'LoginController as vm'
                });
                $urlRouterProvider.otherwise('/');
            }
            return LoginRouteConfiguration;
        })();
        angular.module('overflow.login', ['overflow.core']).config(LoginRouteConfiguration);
    })(Login = Overflow.Login || (Overflow.Login = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=login.module.js.map