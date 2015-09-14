/**
 * @ngdoc module
 * @name overflow.core
 * @module overflow
 * @description Core module for dependencies that should be inherited across many different modules.
 *              Global directives and services will also be found here.
 **/

(function() {
    'use strict';

    angular.module('overflow.core', [
        'ngResource',
        'ngAnimate',
        'ngMessages',
        'toastr',
        'ui.router',
        'formly',
        'formlyBootstrap',
        'overflow.templates'
    ]);

    angular.module('overflow.core')
        .run(constructValidationMessages);

    /* @ngInject */
    function constructValidationMessages(formlyConfig, formlyValidationMessages) {
        var template = '<formly-transclude></formly-transclude>' +
            '<div class="validation-messages" ng-messages="fc.$error" ng-if="options.formControl.$touched">' +
            '<div class="message" ng-message="{{::name}}" ng-repeat="(name, message) in ::options.validation.messages">' +
            '{{message(fc.$viewValue, fc.$modelValue, this)}}' +
            '</div>' +
            '</div>';
        formlyConfig.setWrapper({
            name: 'validation',
            types: ['input'],
            template: template
        });

        formlyValidationMessages.addTemplateOptionValueMessage('maxlength', 'maxlength', '', 'is the maximum length', 'Too long');
        formlyValidationMessages.addTemplateOptionValueMessage('minlength', 'minlength', '', 'is the minimum length', 'Too short');
        formlyValidationMessages.messages.required = 'to.label + " is required"';
        formlyValidationMessages.messages.email = '$viewValue + " is not a valid email address"';
    }
})();
