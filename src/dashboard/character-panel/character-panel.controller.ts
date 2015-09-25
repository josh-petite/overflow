/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../core/services/character.service.ts" />
/// <reference path="../../core/services/notification.service.ts" />

/**
 * @ngdoc controller
 * @name CharacterPanelController
 * @module overflow.dashboard
 * @description Controller to support the character panel directive
 **/

module Overflow.Dashboard {
    class CharacterPanelController {
        private characterDetails:{};
        private loadingCharacter:boolean;

        constructor(private CharacterService:Overflow.Core.Services.ICharacterService,
                    private NotificationService:Overflow.Core.Services.INotificationService,
                    private $log:ng.ILogService) {

            this.retrieveCharacterDetails();
        }

        private retrieveCharacterDetails() {
            this.loadingCharacter = true;
            var promise = this.CharacterService.retrieveDashboardDetails(1); // TODO: Refactor to use user context after login
            promise.then((details:{}) => {
                this.characterDetails = details;
            }, (error:{}) => {
                this.$log.error(error);
                this.NotificationService.error('Character load failed!');
            })
            .finally(() => {
                this.loadingCharacter = false;
            });
        }
    }

    angular.module('overflow.dashboard')
        .controller('CharacterPanelController', CharacterPanelController);
}


