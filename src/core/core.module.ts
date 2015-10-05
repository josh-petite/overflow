/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-formly/angular-formly.d.ts" />

/**
 * @ngdoc module
 * @name overflow.core
 * @module overflow
 * @description Core module for dependencies that should be inherited across many different modules.
 *              Global directives and services will also be found here.
 **/

module Overflow.Core {
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

    export interface IGameConfig {
        width: number;
        height: number;
    }

    angular.module('overflow.core')
        .constant('GameConfig', {
            width: 720,
            height: 480
        });

    class ValidationConfiguration {
        $inject = ['formlyConfig', 'formlyValidationMessages'];

        constructor(formlyConfig:AngularFormly.IFormlyConfig, formlyValidationMessages:AngularFormly.IValidationMessages) {
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
        }
    }

    angular.module('overflow.core')
        .run(ValidationConfiguration);
}
