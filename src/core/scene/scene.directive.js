/**
 * @ngdoc directive
 * @name scene
 * @module overflow.core
 * @description Directive to encapsulate the main game canvas
 **/

(function() {
    'use strict';

    angular.module('overflow.core')
        .directive('scene', scene);

    /* ngInject */
    function scene() {
        return {
            scope: {
                target: '@'
            },
            templateUrl: 'src/core/scene/scene.html',
            controller: 'SceneController as vm'
        };
    }
})();
