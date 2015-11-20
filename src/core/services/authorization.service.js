/**
 * @ngdoc service
 * @name AuthorizationService
 * @module overflow.core
 * @description The Authorization service's purpose is to wrap up authorize functionality
                it basically just checks to see if the principal is authenticated and checks the root state
                to see if there is a state that needs to be authorized. if so, it does a role check.
                this is used by the state resolver to make sure when you refresh, hard navigate, or drop onto a
                route, the app resolves your identity before it does an authorize check. after that,
                authorize is called from $stateChangeStart to make sure the principal is allowed to change to
                the desired state.
 **/

(function() {
    'use strict';

    angular.module('overflow.core')
        .factory('AuthorizationService', authorizationService);

    /* @ngInject */
    function authorizationService($rootScope, $state, PrincipalService) {
        return {
            authorize: function() {
                return PrincipalService.identity()
                    .then(function() {
                        var isAuthenticated = PrincipalService.isAuthenticated();

                        if ($rootScope.toState.data.roles && $rootScope.toState.data.roles.length > 0
                            && !PrincipalService.isInAnyRole($rootScope.toState.data.roles)) {

                            if (isAuthenticated) {
                                $state.go('accessDenied'); // user is signed in but not authorized for desired state
                            }
                            else {
                                // user is not authenticated. stow the state they wanted before you
                                // send them to the login state, so you can return them when you're done
                                $rootScope.returnToState = $rootScope.toState;
                                $rootScope.returnToStateParams = $rootScope.toStateParams;

                                // now, send them to the login state so they can log in
                                $state.go('login');
                            }
                        }
                    });
            }
        };
    }
})();