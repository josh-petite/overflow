/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-resource.d.ts" />
/**
 * @ngdoc service
 * @name CharacterService
 * @module overflow.character
 * @description Character service for retrieving metadata around one or many characters
 **/
var Overflow;
(function (Overflow) {
    var Core;
    (function (Core) {
        var Services;
        (function (Services) {
            var CharacterService = (function () {
                function CharacterService($resource, $q, $log) {
                    this.$resource = $resource;
                    this.$q = $q;
                    this.$log = $log;
                    this.resource = $resource('/api/v1/characters/:id', { id: '@id' });
                }
                CharacterService.prototype.retrieveDashboardDetails = function (id) {
                    var deferred = this.$q.defer();
                    this.resource.get({ id: id }).$promise.then(success, failure);
                    function success(data) {
                        this.$log.info(data);
                        deferred.resolve(data);
                    }
                    function failure(error) {
                        this.$log.error(error);
                        deferred.reject(error);
                    }
                    return deferred.promise;
                };
                return CharacterService;
            })();
            angular.module('overflow.core').factory('CharacterService', CharacterService);
        })(Services = Core.Services || (Core.Services = {}));
    })(Core = Overflow.Core || (Overflow.Core = {}));
})(Overflow || (Overflow = {}));
//# sourceMappingURL=character.service.js.map