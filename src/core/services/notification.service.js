/// <reference path="../../../typings/tsd.d.ts" />
/**
 * @ngdoc service
 * @name NotificationService
 * @module overflow.core
 * @description Primary module for displaying toast user feedback notifications
 **/
var ov;
(function (ov) {
    'use strict';
    angular.module('overflow.core').factory('NotificationService', NotificationService);
    var NotificationService = (function () {
        /* @ngInject */
        function NotificationService($rootScope, toastr) {
            this.$rootScope = $rootScope;
            this.toastr = toastr;
            $rootScope.$on('$stateChangeStart', this.handleStateChangeStart);
        }
        NotificationService.prototype.handleStateChangeStart = function () {
            this.toastr.clear();
        };
        NotificationService.prototype.success = function (message, options, title) {
            options = options || {};
            options.progressBar = true;
            this.toastr.success(message, title || 'Success', options);
        };
        NotificationService.prototype.info = function (message, options, title) {
            options = options || {};
            options.progressBar = true;
            this.toastr.info(message, title, 'Info', options);
        };
        NotificationService.prototype.warning = function (message, options, title) {
            options = options || {};
            options.progressBar = true;
            this.toastr.warning(message, title || 'Warning', options);
        };
        NotificationService.prototype.error = function (message, options, title) {
            options = options || {};
            options.closeButton = true;
            options.timeOut = 0;
            this.toastr.error(message, title || 'Error', options);
        };
        return NotificationService;
    })();
})(ov || (ov = {}));
//# sourceMappingURL=notification.service.js.map