/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/**
 * @ngdoc module
 * @name overflow.account
 * @module overflow.account
 * @description Module for handling user interaction with account creation and management
 **/
var Overflow;
(function (Overflow) {
    var Account;
    (function (Account) {
        angular.module('overflow.account', [
            'overflow.core'
        ]);
        angular.module('overflow.account').config(AccountRouteConfiguration);
        var AccountRouteConfiguration = (function () {
            /* @ngInject */
            function AccountRouteConfiguration($stateProvider, $urlRouterProvider) {
                $stateProvider.state('createAccount', {
                    url: '/account/create',
                    templateUrl: 'src/account/create.html',
                    controller: 'CreateAccountController as vm'
                });
                $urlRouterProvider.otherwise('/');
            }
            return AccountRouteConfiguration;
        })();
    })(Account = Overflow.Account || (Overflow.Account = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=account.module.js.map