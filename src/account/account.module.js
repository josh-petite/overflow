/**
 * @ngdoc module
 * @name overflow.account
 * @module overflow.account
 * @description Module for handling user interaction with account creation and management
 **/

(function() {
    'use strict';

    angular.module('overflow.account', [
        'overflow.core'
    ]);

    angular.module('overflow.account')
        .config(accountRoutes);

    /* @ngInject */
    function accountRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('createAccount', {
                url: '/account/create',
                templateUrl: 'src/account/create.html',
                controller: 'CreateAccountController as vm'
            });

        $urlRouterProvider.otherwise('/');
    }

    //http://angular-formly.com/#/example/advanced/validators
    angular.module('overflow.account')
        .run(constructValidationMessages);

    /* @ngInject */
    function constructValidationMessages(formlyConfig, formlyValidationMessages) {
        formlyConfig.setWrapper({
            name: 'validation',
            types: ['input'],
            templateUrl: 'validation-messages.html'
        });

        formlyValidationMessages.addTemplateOptionValueMessage('maxlength', 'maxlength', '', 'is the maximum length', 'Too long');
        formlyValidationMessages.addTemplateOptionValueMessage('minlength', 'minlength', '', 'is the minimum length', 'Too short');
        formlyValidationMessages.messages.required = 'to.label + " is required"';
        formlyValidationMessages.messages.email = '$viewValue + " is not a valid email address"';
        formlyValidationMessages.messages.passwordConfirmation = 'test';
    }
})();
