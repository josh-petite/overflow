/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../bower_components/phaser/typescript/phaser.d.ts" />

/**
 * @ngdoc controller
 * @name SceneController
 * @module overflow.core
 * @description Controller to support the main game scene
 **/

module Overflow.Core {
    angular.module('overflow.core')
        .controller('SceneController', SceneController);
    
    class SceneController {
        private game : Phaser.Game;
        private player : Phaser.Sprite;
        
        constructor(private GameConfig: IGameConfig) {
            this.game = new Phaser.Game(GameConfig.width, GameConfig.height, Phaser.AUTO, 'target', {preload: this.preload, create: this.create, update: this.update});
        }        

        ///////////////////////////////////////////////////////////////////////

        preload() : void {
            this.game.load.spritesheet('characters', 'assets/resource.jpg', 24, 32);
        }

        create() : void {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.player = this.game.add.sprite(32, this.game.world.height - 150, 'characters');

            //  We need to enable physics on the player
            this.game.physics.arcade.enable(this.player);

            //  Player physics properties. Give the little guy a slight bounce.
            //this.player.body.bounce.y = 0.2;
            //this.player.body.gravity.y = 300;
            this.player.body.collideWorldBounds = true;

            this.player.animations.add('up', [0, 1, 2], 10, true);
            this.player.animations.add('right', [12, 13, 14], 10, true);
            this.player.animations.add('down', [24, 25, 26], 10, true);
            this.player.animations.add('left', [36, 37, 38], 10, true);
        }

        update() : void {
            this.player.body.velocity.x = 0;

            var cursors = this.game.input.keyboard.createCursorKeys();

            if (cursors.left.isDown) {
                //  Move to the left
                this.player.body.position.x += -3;
                this.player.animations.play('left');
            } else if (cursors.right.isDown) {
                //  Move to the right
                this.player.body.position.x += 3;
                this.player.animations.play('right');
            } else if (cursors.up.isDown) {
                this.player.body.position.y += -3;
                this.player.animations.play('up');
            } else if (cursors.down.isDown) {
                this.player.body.position.y += 3;
                this.player.animations.play('down');
            } else {
                //  Stand still
                this.player.animations.stop();
                this.player.frame = 1;
            }

            //  Allow the player to jump if they are touching the ground.
            if (cursors.up.isDown && this.player.body.touching.down) {
                this.player.body.velocity.y = -350;
            }
        }
    }
}