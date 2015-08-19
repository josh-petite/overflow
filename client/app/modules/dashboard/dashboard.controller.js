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
