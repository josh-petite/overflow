/// <reference path="../typings/angularjs/angular.d.ts" />

/**
 * @ngdoc controller
 * @name MainController
 * @module overflow
 * @description Global controller for interacting with main module and global state
 **/

module ov {

    angular.module('overflow')
        .controller('MainController', MainController);

    class MainController {
        /* @ngInject */
        constructor() {
        }
    }
}
