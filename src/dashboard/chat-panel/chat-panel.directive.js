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
        var ChatPanelDirective = (function () {
            function ChatPanelDirective() {
                this.templateUrl = 'src/dashboard/chat-panel/chat-panel.html';
                this.controller = 'ChatPanelController';
            }
            ChatPanelDirective.Factory = function () {
                return function () {
                    return new ChatPanelDirective();
                };
            };
            return ChatPanelDirective;
        })();
        angular.module('overflow.dashboard').directive('chatPanel', ChatPanelDirective.Factory());
    })(Dashboard = Overflow.Dashboard || (Overflow.Dashboard = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=chat-panel.directive.js.map