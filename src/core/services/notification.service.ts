/// <reference path="../../../typings/tsd.d.ts" />

/**
 * @ngdoc service
 * @name NotificationService
 * @module overflow.core
 * @description Primary module for displaying toast user feedback notifications
 **/

module Overflow {
    'use strict';

    angular.module('overflow.core')
        .factory('NotificationService', NotificationService);

    export interface INotificationService {
        error: (message:string, options?:any, title?:string) => void;
        info: (message:string, options?:any, title?:string) => void;
        success: (message:string, options?:any, title?:string) => void;
        warning: (message:string, options?:any, title?:string) => void;
    }

    class NotificationService implements INotificationService {

        /* @ngInject */
        constructor(private $rootScope:ng.IRootScopeService, private toastr:any) {
            $rootScope.$on('$stateChangeStart', this.handleStateChangeStart);
        }

        private handleStateChangeStart():void {
            this.toastr.clear();
        }

        success(message:string, options?:any, title?:string):void {
            options = options || {};
            options.progressBar = true;
            this.toastr.success(message, title || 'Success', options);
        }

        info(message:string, options?:any, title?:string):void {
            options = options || {};
            options.progressBar = true;
            this.toastr.info(message, title, 'Info', options);
        }

        warning(message:string, options?:any, title?:string):void {
            options = options || {};
            options.progressBar = true;
            this.toastr.warning(message, title || 'Warning', options);
        }

        error(message:string, options?:any, title?:string):void {
            options = options || {};
            options.closeButton = true;
            options.timeOut = 0;
            this.toastr.error(message, title || 'Error', options);
        }
    }
}
