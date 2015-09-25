/// <reference path="../../../typings/angularjs/angular.d.ts" />
/**
 * @ngdoc directive
 * @name loadingIndicator
 * @module overflow.core
 * @description Directive to encapsulate the loading indicator to be used throughout the game
 **/
var Overflow;
(function (Overflow) {
    var Core;
    (function (Core) {
        var Directives;
        (function (Directives) {
            var LoadingIndicatorDirective = (function () {
                function LoadingIndicatorDirective() {
                    this.template = '<div class="sk-three-bounce">' + '<div class="sk-child sk-bounce1"></div>' + '<div class="sk-child sk-bounce2"></div>' + '<div class="sk-child sk-bounce3"></div>' + '</div>';
                }
                LoadingIndicatorDirective.Factory = function () {
                    return function () {
                        return new LoadingIndicatorDirective();
                    };
                };
                return LoadingIndicatorDirective;
            })();
            angular.module('overflow.core').directive('loadingIndicator', LoadingIndicatorDirective.Factory());
        })(Directives = Core.Directives || (Core.Directives = {}));
    })(Core = Overflow.Core || (Overflow.Core = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=loading-indicator.directive.js.map