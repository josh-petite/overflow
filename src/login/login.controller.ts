/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="login.service.ts" />
/// <reference path="../core/services/notification.service.ts" />
/// <reference path="../../typings/angular-formly/angular-formly.d.ts" />

/**
 * @ngdoc controller
 * @name LoginController
 * @module overflow.login
 * @description Primary login controller
 **/

module Overflow.Login {

    class LoginController {
        public fields : Array<AngularFormly.IFieldConfigurationObject>;
        public model = {};
        public options : AngularFormly.IFormOptionsAPI;

        /* @ngInject */
        constructor(private LoginService:Overflow.Login.ILoginService, private NotificationService:Overflow.Core.Services.INotificationService) {
            this.constructFields();
        }

        private constructFields():void {
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
                        email: function ($viewValue: any, $modelValue: any) : boolean {
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

        public performLogin():void {
            var promise = this.LoginService.performLogin(this.model);
            promise.then(loginSuccessful, loginFailed);

            function loginSuccessful():void {
                this.NotificationService.success('Login successful!');
            }

            function loginFailed(error: {}):void {
                this.NotificationService.error(error);
            }
        }
    }

    angular.module('overflow.login')
        .controller('LoginController', LoginController);
}
