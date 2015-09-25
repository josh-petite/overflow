/// <reference path="../../../typings/angularjs/angular.d.ts" />

/**
 * @ngdoc directive
 * @name characterPanel
 * @module overflow.dashboard
 * @description Directive to encapsulate the character panel seen on the left of the dashboard
 **/

module Overflow.Dashboard {
    class ChatPanelDirective {
        constructor(public $scope : ng.IScope, public templateUrl : string, public controller : string) {
            templateUrl = 'src/dashboard/chat-panel/chat-panel.html';
            controller = 'ChatPanelController';
        }

        public static Factory() {
            return ($scope : ng.IScope, templateUrl : string, controller : string) => {
                return new ChatPanelDirective($scope, templateUrl, controller);
            };
        }
    }

    angular.module('overflow.dashboard')
        .directive('chatPanel', ChatPanelDirective.Factory());
}
