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
    function sceneController(GameConfig) {
        var vm = this;
        vm.game = {};
        vm.player = {};
        
        activate();
        
        function activate() {
            vm.game = new Phaser.Game(GameConfig.width, GameConfig.height, Phaser.AUTO, 'target', { preload: preload, create: create, update: update });
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
            //vm.player.body.bounce.y = 0.2;
            //vm.player.body.gravity.y = 300;
            vm.player.body.collideWorldBounds = true;
            vm.player.animations.add('up', [0, 1, 2], 10, true);
            vm.player.animations.add('right', [12, 13, 14], 10, true);
            vm.player.animations.add('down', [24, 25, 26], 10, true);
            vm.player.animations.add('left', [36, 37, 38], 10, true);
        }

        function update() {
            vm.player.body.velocity.x = 0;
            var cursors = vm.game.input.keyboard.createCursorKeys();
            if (cursors.left.isDown) {
                //  Move to the left
                vm.player.body.position.x += -3;
                vm.player.animations.play('left');
            }
            else if (cursors.right.isDown) {
                //  Move to the right
                vm.player.body.position.x += 3;
                vm.player.animations.play('right');
            }
            else if (cursors.up.isDown) {
                vm.player.body.position.y += -3;
                vm.player.animations.play('up');
            }
            else if (cursors.down.isDown) {
                vm.player.body.position.y += 3;
                vm.player.animations.play('down');
            }
            else {
                //  Stand still
                vm.player.animations.stop();
                vm.player.frame = 1;
            }
            //  Allow the player to jump if they are touching the ground.
            if (cursors.up.isDown && vm.player.body.touching.down) {
                vm.player.body.velocity.y = -350;
            }
        }
    }
})();
