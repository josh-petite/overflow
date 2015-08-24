(function () {
    'use strict';

    describe('CharacterController', function () {
        beforeEach(angular.mock.module('overflow.templates'));
        beforeEach(angular.mock.module('overflow.core'));
        beforeEach(angular.mock.module('overflow.character'));

        var $log,
            $httpBackend,
            createController,
            characterResource,
            testCharacter;

        beforeEach(inject(function (_$log_, _$controller_, _$httpBackend_, _CharacterResource_) {
            $log = _$log_;
            $httpBackend = _$httpBackend_;
            characterResource = _CharacterResource_;

            createController = function () {
                return _$controller_('CharacterController', {});
            };

            testCharacter = {
                name: 'Marcant',
                level: 1,
                hitPoints: 5,
                job: 'Mercenary'
            };
        }));

        it('should get the current users character when the controller is activated', function () {
            spyOn(characterResource, 'get');
            createController();
            expect(characterResource.get).toHaveBeenCalled();
        });
    });
})();
