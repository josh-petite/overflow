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
        vm.fields = [];
        vm.model = {};
        vm.options = {};

        vm.performLogin = performLogin;

        activate();

        function activate() {
            constructFields();
            $rootScope.hideNav = true;
        }

        ///////////////////////////////////////////////////////////////////////

        function constructFields() {
            vm.fields = [
                {
                    key: 'username',
                    type: 'input',
                    templateOptions: {
                        type: 'text',
                        label: 'Username (e-mail address)',
                        placeholder: 'Enter username',
                        focus: true,
                        required: true
                    },
                    validators: {
                        email: function($viewValue, $modelValue) {
                            var value = $modelValue || $viewValue;
                            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                            return re.test(value);
                        }
                    }
                },
                {
                    key: 'password',
                    type: 'input',
                    templateOptions: {
                        type: 'password',
                        label: 'Password',
                        placeholder: 'Password',
                        required: true
                    }
                },
                {
                    key: 'rememberMe',
                    type: 'checkbox',
                    templateOptions: {
                        label: 'Remember Me'
                    }
                }
            ];
        }

        function performLogin() {
            var promise = LoginService.performLogin(vm.model);
            promise.then(loginSuccessful, loginFailed);

            function loginSuccessful() {
                NotificationService.success('Login successful!');
            }

            function loginFailed(error) {
                NotificationService.error(error);
            }
        }
    }
})();
