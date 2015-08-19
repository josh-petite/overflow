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
