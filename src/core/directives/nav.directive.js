/**
 * Created by Josh on 7/6/15.
 */

angular.module('overflow.core').directive('nav', [function() {
  'use strict';

  return {
    restrict: 'A',
    scope: {
    },
    templateUrl: 'src/core/directives/templates/nav.html'
  };
}]);
