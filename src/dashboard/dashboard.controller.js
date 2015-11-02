/**
 * @ngdoc controller
 * @name DashboardController
 * @module overflow.dashboard
 * @description Main dashboard controller
 **/

(function() {
    'use strict';

    angular.module('overflow.dashboard')
        .controller('DashboardController', dashboardController);

    /* @ngInject */
    function dashboardController() {
        var vm = this;

        vm.addItemToArray = addItemToArray;

        activate();

        function activate() {
            getFirebaseData();
        }

        ///////////////////////////////////////////////////////////////////////

        function addItemToArray() {
            //var ref = new Firebase(vm.firebaseUrl);
            //var childRef = ref.child('test');
            //
            //var newItem = childRef.push();
            //newItem.set("test");

        }

        function getFirebaseData() {

        }
    }
})();
