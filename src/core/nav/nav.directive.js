/// <reference path="../../../typings/angularjs/angular.d.ts" />
/**
 * @ngdoc directive
 * @name nav
 * @module overflow.core
 * @description Directive to encapsulate the top nav bar
 **/
var Overflow;
(function (Overflow) {
    var Core;
    (function (Core) {
        var Directives;
        (function (Directives) {
            angular.module('overflow.core').directive('nav', HorizontalNavDirective.Factory());
            var HorizontalNavDirective = (function () {
                function HorizontalNavDirective() {
                    this.templateUrl = 'src/core/nav/nav.html';
                }
                HorizontalNavDirective.Factory = function () {
                    return function () {
                        return new HorizontalNavDirective();
                    };
                };
                return HorizontalNavDirective;
            })();
        })(Directives = Core.Directives || (Core.Directives = {}));
    })(Core = Overflow.Core || (Overflow.Core = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=nav.directive.js.map