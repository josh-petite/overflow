/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/**
 * @ngdoc module
 * @name overflow.dashboard
 * @module overflow
 * @description Primary module for dashboard
 **/
var Overflow;
(function (Overflow) {
    var Dashboard;
    (function (Dashboard) {
        var DashboardRoutes = (function () {
            /* @ngInject */
            function DashboardRoutes($stateProvider, $urlRouterProvider) {
                $stateProvider.state('dashboard', {
                    url: '/',
                    templateUrl: 'src/dashboard/dashboard.html',
                    controller: 'DashboardController as vm'
                });
                $urlRouterProvider.otherwise('/');
            }
            return DashboardRoutes;
        })();
        angular.module('overflow.dashboard', ['overflow.core']).config(DashboardRoutes);
    })(Dashboard = Overflow.Dashboard || (Overflow.Dashboard = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=dashboard.module.js.map