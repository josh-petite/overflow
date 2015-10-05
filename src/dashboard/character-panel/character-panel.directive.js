/// <reference path="../../../typings/angularjs/angular.d.ts" />
/**
 * @ngdoc directive
 * @name characterPanel
 * @module overflow.dashboard
 * @description Directive to encapsulate the character panel seen on the left of the dashboard
 **/
var Overflow;
(function (Overflow) {
    var Dashboard;
    (function (Dashboard) {
        var CharacterPanelDirective = (function () {
            function CharacterPanelDirective() {
                this.templateUrl = 'src/dashboard/character-panel/character-panel.html';
                this.controller = 'CharacterPanelController';
            }
            CharacterPanelDirective.Factory = function () {
                return function () {
                    return new CharacterPanelDirective();
                };
            };
            return CharacterPanelDirective;
        })();
        angular.module('overflow.dashboard').directive('characterPanel', CharacterPanelDirective.Factory());
    })(Dashboard = Overflow.Dashboard || (Overflow.Dashboard = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=character-panel.directive.js.map