/// <reference path="../../../typings/angularjs/angular.d.ts" />

/**
 * @ngdoc controller
 * @name ChatPanelController
 * @module overflow.dashboard
 * @description Controller to support the chat panel directive
 **/

module Overflow.Dashboard {

    class ChatPanelController {
        public chatMessages : Array<{}>;
        public chatLoading : boolean;

        constructor() {
            this.chatMessages = [];
            this.chatLoading = true;

            this.loadRecentChat();
        }

        loadRecentChat() : void {
            this.chatLoading = false; // TODO: investigate chat technologies
        }
    }

    angular.module('overflow.dashboard')
        .controller('ChatPanelController', ChatPanelController);
}