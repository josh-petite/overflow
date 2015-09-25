/// <reference path="../../../typings/angularjs/angular.d.ts" />
/**
 * @ngdoc controller
 * @name CharacterPanelController
 * @module overflow.dashboard
 * @description Controller to support the character panel directive
 **/
var Overflow;
(function (Overflow) {
    var Dashboard;
    (function (Dashboard) {
        var CharacterPanelController = (function () {
            function CharacterPanelController(CharacterSerivce, NotificationService) {
                this.CharacterSerivce = CharacterSerivce;
                this.NotificationService = NotificationService;
            }
            return CharacterPanelController;
        })();
        angular.module('overflow.dashboard').controller('CharacterPanelController', CharacterPanelController);
    })(Dashboard = Overflow.Dashboard || (Overflow.Dashboard = {}));
})(Overflow || (Overflow = {}));
(function () {
    'use strict';
    angular.module('overflow.dashboard').controller('CharacterPanelController', characterPanelController);
    /* @ngInject */
    function characterPanelController(CharacterService, NotificationService) {
        /*jshint validthis: true */
        var vm = this;
        vm.characterDetails = {};
        activate();
        function activate() {
            retrieveCharacterDetails();
        }
        ///////////////////////////////////////////////////////////////////////
        function retrieveCharacterDetails() {
            vm.loadingCharacter = true;
            var promise = CharacterService.retrieveDashboardDetails(1); // TODO: Refactor to use user context after login
            promise.then(detailsReceivedSuccessfully, detailsReceivedUnsuccessfully).finally(loadingCharacterFinished);
            function detailsReceivedSuccessfully(details) {
                vm.characterDetails = details;
            }
            function detailsReceivedUnsuccessfully() {
                NotificationService.error('Character load failed!');
            }
            function loadingCharacterFinished() {
                vm.loadingCharacter = false;
            }
        }
    }
})();
//# sourceMappingURL=character-panel.directive.js.map