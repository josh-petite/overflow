/**
 * @ngdoc controller
 * @name SceneController
 * @module overflow.core
 * @description Controller to support the main game scene
 **/

(function() {
    'use strict';

    angular.module('overflow.core')
        .controller('SceneController', sceneController);

    /* @ngInject */
    function sceneController($scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.game = {};
        vm.player = {};

        activate();

        function activate() {
            vm.game = new Phaser.Game(720, 480, Phaser.AUTO, 'target', {preload: preload, create: create, update: update});
        }

        ///////////////////////////////////////////////////////////////////////

        function preload() {
            vm.game.load.spritesheet('characters', 'src/core/scene/assets/resource.png', 24, 32);
        }

        function create() {
            vm.player = vm.game.add.sprite(32, vm.game.world.height - 150, 'characters');

            vm.player.animations.add('up', [0, 1, 2], 10, true);
            vm.player.animations.add('right', [12, 13, 14, 15], 10, true);
            vm.player.animations.add('down', [25, 26, 27, 28], 10, true);
            vm.player.animations.add('left', [37, 38, 39, 40], 10, true);
        }

        function update() {
            var cursors = vm.game.input.keyboard.createCursorKeys();

            if (cursors.left.isDown) {
                //  Move to the left
                vm.player.body.velocity.x = -150;
                vm.player.animations.play('left');
            } else if (cursors.right.isDown) {
                //  Move to the right
                vm.player.body.velocity.x = 150;
                vm.player.animations.play('right');
            } else {
                //  Stand still
                vm.player.animations.stop();
                vm.player.frame = 4;
            }
        }
    }
})();
