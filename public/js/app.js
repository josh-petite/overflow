/**
 * Created by Josh on 7/5/15.
 */

/**
 * @ngdoc module
 * @name overflow
 * @module overflow
 * @description Primary module for overflow application. Houses a single wrapper controller
 *              for handing global eventing.
 **/
angular.module('overflow', [
  'overflow.core',
  'overflow.dashboard'
]);

angular.module('overflow').controller('mainController', mainController);

/* @ngInject */
function mainController($scope) {
  'use strict';

  $scope.$on('$stateChangeStart', handleStateChangeStart);

  function handleStateChangeStart(event, toState, toParams, fromState, fromParams) {
    console.log(fromParams);
  }
}
mainController.$inject = ["$scope"];

/**
 * Created by Josh on 7/6/15.
 */

/**
 * @ngdoc module
 * @name overflow.core
 * @module overflow
 * @description Core module for dependencies that should be inherited across many different modules.
 *              Global directives and services will also be found here.
 **/
angular.module('overflow.core', [
  'ui.router',
  'overflow.templates'
]);

/**
 * Created by Josh on 7/5/15.
 */

/**
 * @ngdoc module
 * @name overflow.dashboard
 * @module overflow
 * @description Primary module for dashboard
 **/
angular.module('overflow.dashboard', [
  'overflow.core',
  'overflow.character'
]);

angular.module('overflow.dashboard').config(dashboardRoutes);

/* @ngInject */
function dashboardRoutes($stateProvider, $urlRouterProvider) {
  'use strict';

  $stateProvider
    .state('dashboard', {
      url: '/',
      templateUrl: 'src/app/modules/dashboard/dashboard.html',
      controller: 'dashboardController as vm'
    });

  $urlRouterProvider.otherwise('/');
}
dashboardRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

/**
 * Created by Josh on 7/6/15.
 */

/**
 * @ngdoc module
 * @name overflow.character
 * @module overflow
 * @description Primary module for character-specific interactions
**/
angular.module('overflow.character', ['overflow.core']);

angular.module('overflow.character').config(characterRoutes);

/* @ngInject */
function characterRoutes($stateProvider, $urlRouterProvider) {
  'use strict';

  $stateProvider
    .state('character', {
      url: '/character',
      templateUrl: 'src/app/modules/character/character.html',
      controller: 'characterController as vm'
    });

  $urlRouterProvider.otherwise('/');
}
characterRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

/**
 * Created by Josh on 7/6/15.
 */

angular.module('overflow.core').directive('nav', [function() {
  'use strict';

  return {
    restrict: 'A',
    scope: {
    },
    templateUrl: 'src/app/modules/core/directives/templates/nav.html'
  };
}]);

/**
 * Created by Josh on 7/5/15.
 */

angular.module('overflow.dashboard')
  .controller('dashboardController', dashboardController);

/* @ngInject */
function dashboardController() {
  'use strict';

  /*jshint validthis: true */
  var vm = this;
  vm.greeting = 'hello from dashboard controller!';

  activate();

  function activate() {
  }

  /////////////////////////////////////////////////////////////////////////////
}

/**
 * Created by Josh on 7/6/15.
 */

angular.module('overflow.character')
  .controller('characterController', characterController);

/* @ngInject */
function characterController() {
  'use strict';

  /*jshint validthis: true */
  var vm = this;

  activate();

  function activate() {
    init();
  }

  /////////////////////////////////////////////////////////////////////////////

  function init() {
    var character = getCharacter();

    vm.name = 'Name: ' + character.name;
    vm.level = 'Level: ' + character.level;
    vm.job = 'Job: ' + character.job;
    vm.hp = 'HP: ' + character.hitPoints;

    vm.items = getItems();
  }

  function getCharacter() {
    return {
      name: 'Josh',
      level: 3,
      hitPoints: 10,
      job: 'Mercenary'
    };
  }

  function getItems() {
    return [
      {
        name: 'Nuyen',
        quantity: 15
      },
      {
        name: 'Holme 312',
        quantity: 1
      },
      {
        name: 'Leather Jacket',
        quantity: 1
      }
    ];
  }
}
