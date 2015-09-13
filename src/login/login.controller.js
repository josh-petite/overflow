/**
 * @ngdoc controller
 * @name LoginController
 * @module overflow.login
 * @description Primary login controller
 **/

(function() {
    'use strict';

    angular.module('overflow.login')
        .controller('LoginController', loginController);

    /* @ngInject */
    function loginController($rootScope, LoginService, NotificationService) {
        /*jshint validthis: true */
        var vm = this;
        vm.username = '';
        vm.password = '';

        vm.clearForm = clearForm;
        vm.performLogin = performLogin;

        activate();

        function activate() {
            $rootScope.hideNav = true;
        }

        ///////////////////////////////////////////////////////////////////////

        function clearForm() {
            vm.username = '';
            vm.password = '';

            $('#username').focus();
        }

        function performLogin() {
            var promise = LoginService.performLogin(vm.username, vm.password);
            promise.then(loginSuccessful, loginFailed);

            function loginSuccessful(data) {
                NotificationService.success('Login successful!');
            }

            function loginFailed(error) {
                NotificationService.error(error);
            }
        }
    }
})();
