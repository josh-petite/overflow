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
    function dashboardController(FirebaseConfig) {
        var vm = this;

        vm.login = login;

        activate();

        function activate() {
        }

        ///////////////////////////////////////////////////////////////////////

        function login() {
            var ref = new Firebase(FirebaseConfig.url);
            ref.authWithOAuthPopup("google", function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
        }
    }
})();
