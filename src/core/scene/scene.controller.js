/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../interfaces/phaser-game.ts" />
/**
 * @ngdoc controller
 * @name SceneController
 * @module overflow.core
 * @description Controller to support the main game scene
 **/
var Overflow;
(function (Overflow) {
    var Core;
    (function (Core) {
        angular.module('overflow.core').controller('SceneController', SceneController);
        var SceneController = (function () {
            function SceneController(GameConfig) {
                this.GameConfig = GameConfig;
                this.game = new Phaser.Game(GameConfig.width, GameConfig.height, Phaser.AUTO, 'target', { preload: preload, create: create, update: update });
            }
            ///////////////////////////////////////////////////////////////////////
            SceneController.prototype.preload = function () {
                this.game.load.spritesheet('characters', 'assets/resource.jpg', 24, 32);
            };
            SceneController.prototype.create = function () {
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
            };
            SceneController.prototype.update = function () {
                this.player.body.velocity.x = 0;
                var cursors = this.game.input.keyboard.createCursorKeys();
                if (cursors.left.isDown) {
                    //  Move to the left
                    this.player.body.position.x += -3;
                    this.player.animations.play('left');
                }
                else if (cursors.right.isDown) {
                    //  Move to the right
                    this.player.body.position.x += 3;
                    this.player.animations.play('right');
                }
                else if (cursors.up.isDown) {
                    this.player.body.position.y += -3;
                    this.player.animations.play('up');
                }
                else if (cursors.down.isDown) {
                    this.player.body.position.y += 3;
                    this.player.animations.play('down');
                }
                else {
                    //  Stand still
                    this.player.animations.stop();
                    this.player.frame = 1;
                }
                //  Allow the player to jump if they are touching the ground.
                if (cursors.up.isDown && this.player.body.touching.down) {
                    this.player.body.velocity.y = -350;
                }
            };
            return SceneController;
        })();
    })(Core = Overflow.Core || (Overflow.Core = {}));
})(Overflow || (Overflow = {}));
(function () {
    'use strict';
    angular.module('overflow.core').controller('SceneController', sceneController);
    /* @ngInject */
})();
//# sourceMappingURL=scene.controller.js.map