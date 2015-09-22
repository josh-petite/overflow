/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="login.service.ts" />
/// <reference path="../core/services/notification.service.ts" />

/**
 * @ngdoc controller
 * @name LoginController
 * @module overflow.login
 * @description Primary login controller
 **/

module fl {
    'use strict';

    angular.module('overflow.login')
        .controller('LoginController', LoginController);


    class LoginController  {
        public fields = [];
        public model = {};
        public options = {};

        /* @ngInject */
        constructor(private LoginService : fl.ILoginService, private NotificationService : fl.INotificationService) {
            this.constructFields();
        }

        private constructFields() : void {
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

        public performLogin() : void {
            var promise = this.LoginService.performLogin(this.model);
            promise.then(loginSuccessful, loginFailed);

            function loginSuccessful() : void {
                this.NotificationService.success('Login successful!');
            }

            function loginFailed(error) : void {
                this.NotificationService.error(error);
            }
        }
    }
}
