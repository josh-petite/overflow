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
    function sceneController() {
        /*jshint validthis: true */
        var vm = this;
        vm.game = {};
        vm.player = {};
        vm.playerAttributes = {
            name: 'Malduvias'
        };

        activate();

        function activate() {
            vm.game = new Phaser.Game(720, 480, Phaser.AUTO, 'target', {preload: preload, create: create, update: update});
        }

        ///////////////////////////////////////////////////////////////////////

        function preload() {
            vm.game.load.spritesheet('characters', 'assets/resource.jpg', 24, 32);
        }

        function create() {
            vm.game.physics.startSystem(Phaser.Physics.ARCADE);

            vm.player = vm.game.add.sprite(32, vm.game.world.height - 150, 'characters');

            //  We need to enable physics on the player
            vm.game.physics.arcade.enable(vm.player);

            //  Player physics properties. Give the little guy a slight bounce.
            vm.player.body.bounce.y = 0.2;
            vm.player.body.gravity.y = 300;
            vm.player.body.collideWorldBounds = true;

            vm.player.animations.add('up', [0, 1, 2], 10, true);
            vm.player.animations.add('right', [12, 13, 14, 15], 10, true);
            vm.player.animations.add('down', [25, 26, 27, 28], 10, true);
            vm.player.animations.add('left', [37, 38, 39, 40], 10, true);
        }

        function update() {
            vm.player.body.velocity.x = 0;

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

            //  Allow the player to jump if they are touching the ground.
            if (cursors.up.isDown && vm.player.body.touching.down) {
                vm.player.body.velocity.y = -350;
            }
        }
    }
})();
