/// <reference path="../../../typings/angularjs/angular.d.ts" />
/**
 * @ngdoc controller
 * @name ChatPanelController
 * @module overflow.dashboard
 * @description Controller to support the chat panel directive
 **/
var Overflow;
(function (Overflow) {
    var Dashboard;
    (function (Dashboard) {
        var ChatPanelController = (function () {
            function ChatPanelController() {
                this.chatMessages = [];
                this.chatLoading = true;
                this.loadRecentChat();
            }
            ChatPanelController.prototype.loadRecentChat = function () {
                this.chatLoading = false; // TODO: investigate chat technologies
            };
            return ChatPanelController;
        })();
        angular.module('overflow.dashboard').controller('ChatPanelController', ChatPanelController);
    })(Dashboard = Overflow.Dashboard || (Overflow.Dashboard = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=chat-panel.controller.js.map