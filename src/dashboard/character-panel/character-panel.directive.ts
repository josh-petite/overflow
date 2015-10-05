/// <reference path="../../../typings/angularjs/angular.d.ts" />

/**
 * @ngdoc directive
 * @name characterPanel
 * @module overflow.dashboard
 * @description Directive to encapsulate the character panel seen on the left of the dashboard
 **/

module Overflow.Dashboard {
    class CharacterPanelDirective implements ng.IDirective {
        public templateUrl : string;
        public controller : string;
        public scope : {};

        constructor() {
            this.templateUrl = 'src/dashboard/character-panel/character-panel.html';
            this.controller = 'CharacterPanelController';
        }

        public static Factory() {
            return () => {
                return new CharacterPanelDirective();
            };
        }
    }

    angular.module('overflow.dashboard')
        .directive('characterPanel', CharacterPanelDirective.Factory());
}