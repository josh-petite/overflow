/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="account.service.ts" />
/// <reference path="../../typings/angular-formly/angular-formly.d.ts" />
/// <reference path="../core/services/notification.service.ts" />

/**
 * @ngdoc controller
 * @name CreateAccountController
 * @module overflow.account
 * @description Controller for managing view interactions for user account creation
 **/

module Overflow.Account {
    angular.module('overflow.account')
        .controller('CreateAccountController', CreateAccountController);

    class CreateAccountController {
        private originalFields : Array<AngularFormly.IFieldConfigurationObject>;

        public fields : Array<AngularFormly.IFieldConfigurationObject>;
        public model = {};
        public options : AngularFormly.IFormOptionsAPI;

        /* @ngInject */
        constructor(private AccountService : Overflow.Account.IAccountService, private NotificationService:Overflow.Core.Services.INotificationService) {
            this.originalFields = angular.copy(this.fields);

            this.constructFields();
        }

        private constructFields() : void {
            this.fields = [
                {
                    key: 'email',
                    type: 'input',
                    templateOptions: {
                        type: 'email',
                        label: 'Email address',
                        placeholder: 'Enter email',
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
                        required: true,
                        minlength: 6,
                        maxlength: 128
                    }
                },
                {
                    key: 'passwordConfirmation',
                    type: 'input',
                    templateOptions: {
                        type: 'password',
                        label: 'Confirm Password',
                        placeholder: 'Confirm password',
                        required: true,
                        minlength: 6,
                        maxlength: 128
                    },
                    expressionProperties: {
                        'templateOptions.disabled': '!model.password'
                    },
                    validators: {
                        passwordConfirmation: {
                            expression: function($viewValue, $modelValue) {
                                var confirmationValue = $modelValue || $viewValue;
                                return this.model.password === confirmationValue;
                            },
                            message: '"Password confirmation does not match password"'
                        }
                    }
                }
            ];
        }

        public performCreation() : void {
            var promise = this.AccountService.create(this.model);
            promise.then(() => {
                this.NotificationService.success('Account creation successful!');
            }, (error) => {
                this.NotificationService.error(error);
            });
        }
    }
}
