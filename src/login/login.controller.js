/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="login.service.ts" />
/// <reference path="../core/services/notification.service.ts" />
/// <reference path="../core/interfaces/angular-formly-field.ts" />
/**
 * @ngdoc controller
 * @name LoginController
 * @module overflow.login
 * @description Primary login controller
 **/
var Overflow;
(function (Overflow) {
    'use strict';
    angular.module('overflow.login').controller('LoginController', LoginController);
    var LoginController = (function () {
        /* @ngInject */
        function LoginController(LoginService, NotificationService) {
            this.LoginService = LoginService;
            this.NotificationService = NotificationService;
            this.fields = Array();
            this.model = {};
            this.options = {};
            this.constructFields();
        }
        LoginController.prototype.constructFields = function () {
            this.fields = [
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
                        email: function ($viewValue, $modelValue) {
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
        };
        LoginController.prototype.performLogin = function () {
            var promise = this.LoginService.performLogin(this.model);
            promise.then(loginSuccessful, loginFailed);
            function loginSuccessful() {
                this.NotificationService.success('Login successful!');
            }
            function loginFailed(error) {
                this.NotificationService.error(error);
            }
        };
        return LoginController;
    })();
})(Overflow || (Overflow = {}));
//# sourceMappingURL=login.controller.js.map