/**
 * @ngdoc controller
 * @name ChatPanelController
 * @module overflow.dashboard
 * @description Controller to support the chat panel directive
 **/

(function() {
    'use strict';

    angular.module('overflow.dashboard').controller('ChatPanelController', chatPanelController);

    function chatPanelController() {
        /*jshint validthis: true */
        var vm = this;
        vm.chatMessages = [];
        vm.chatLoading = true;

        activate();

        function activate() {
            loadRecentChat();
        }

        ///////////////////////////////////////////////////////////////////////

        function loadRecentChat() {
            vm.chatLoading = false; // TODO: implement all the chats
        }
    }
})();
