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
            function ChatPanelDirective($scope, templateUrl, controller) {
                this.$scope = $scope;
                this.templateUrl = templateUrl;
                this.controller = controller;
                templateUrl = 'src/dashboard/chat-panel/chat-panel.html';
                controller = 'ChatPanelController';
            }
            ChatPanelDirective.Factory = function () {
                return function ($scope, templateUrl, controller) {
                    return new ChatPanelDirective($scope, templateUrl, controller);
                };
            };
            return ChatPanelDirective;
        })();
        angular.module('overflow.dashboard').directive('chatPanel', ChatPanelDirective.Factory());
    })(Dashboard = Overflow.Dashboard || (Overflow.Dashboard = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=chat-panel.directive.js.map