/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="account.service.ts" />
/// <reference path="../../typings/angular-formly/angular-formly.d.ts" />
/**
 * @ngdoc controller
 * @name CreateAccountController
 * @module overflow.account
 * @description Controller for managing view interactions for user account creation
 **/
var Overflow;
(function (Overflow) {
    var Account;
    (function (Account) {
        angular.module('overflow.account').controller('CreateAccountController', CreateAccountController);
        var CreateAccountController = (function () {
            /* @ngInject */
            function CreateAccountController(AccountService, NotificationService) {
                this.AccountService = AccountService;
                this.NotificationService = NotificationService;
                this.model = {};
                this.options = AngularFormly.IFormOptionsAPI;
                this.originalFields = angular.copy(this.fields);
                this.constructFields();
            }
            CreateAccountController.prototype.constructFields = function () {
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
                                expression: function ($viewValue, $modelValue) {
                                    var confirmationValue = $modelValue || $viewValue;
                                    return vm.model.password === confirmationValue;
                                },
                                message: '"Password confirmation does not match password"'
                            }
                        }
                    }
                ];
            };
            CreateAccountController.prototype.performCreation = function () {
                var promise = AccountService.create(this.model);
                promise.then(creationSuccessful, creationFailed);
                function creationSuccessful() {
                    NotificationService.success('Account creation successful!');
                }
                function creationFailed(error) {
                    NotificationService.error(error);
                }
            };
            return CreateAccountController;
        })();
    })(Account = Overflow.Account || (Overflow.Account = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=create-account.controller.js.map