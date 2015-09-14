/**
 * @ngdoc controller
 * @name CreateAccountController
 * @module overflow.account
 * @description Controller for managing view interactions for user account creation
 **/

(function() {
    'use strict';

    angular.module('overflow.account')
        .controller('CreateAccountController', createAccountController);

    function createAccountController(AccountService, NotificationService) {
        /*jshint validthis: true */
        var vm = this;
        vm.fields = [];
        vm.model = {};
        vm.options = {};

        vm.performCreation = performCreation;

        activate();

        function activate() {
            constructFields();
            vm.originalFields = angular.copy(vm.fields);
        }

        /////////////////////////////////////////////////////////////////////////////

        function constructFields() {
            vm.fields = [
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
                                return vm.model.password === confirmationValue;
                            },
                            message: '"Password confirmation does not match password"'
                        }
                    }
                }
            ];
        }

        function performCreation() {
            var promise = AccountService.create(vm.model);
            promise.then(creationSuccessful, creationFailed);

            function creationSuccessful() {
                NotificationService.success('Account creation successful!');
            }

            function creationFailed(error) {
                NotificationService.error(error);
            }
        }
    }
})();
