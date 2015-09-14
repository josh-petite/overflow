(function () {
    'use strict';

    describe('CreateAccountController', function () {
        beforeEach(module('overflow.templates'));
        beforeEach(module('overflow.core'));
        beforeEach(module('overflow.account'));

        var $rootScope,
            deferred,
            createController,
            NotificationService,
            mockAccountService;

        beforeEach(inject(function (_$rootScope_, _$controller_, _$q_, _NotificationService_) {
            $rootScope = _$rootScope_;
            NotificationService = _NotificationService_;
            mockAccountService = {
                create: function(model) {
                    deferred = _$q_.defer();
                    return deferred.promise;
                }
            };

            createController = function () {
                return _$controller_('CreateAccountController', {
                    AccountService: mockAccountService
                });
            };
        }));

        it('should hide the nav when first loading', function () {
            expect($rootScope.hideNav).toBeFalsy();
            createController();
            expect($rootScope.hideNav).toBeTruthy();
        });

        it('should display a success message via notification service when account creation succeeds', function() {
            var controller = createController();
            controller.model = {user: 'test'};

            spyOn(mockAccountService, 'create').and.callThrough();
            spyOn(NotificationService, 'success');

            controller.performCreation();

            deferred.resolve('success');
            $rootScope.$apply();

            expect(mockAccountService.create).toHaveBeenCalledWith(controller.model);
            expect(NotificationService.success).toHaveBeenCalledWith('Account creation successful!');
        });

        it('should display a failure message via notification service when account creation fails', function() {
            var controller = createController();
            controller.model = {user: 'test'};

            spyOn(mockAccountService, 'create').and.callThrough();
            spyOn(NotificationService, 'error');

            controller.performCreation();

            deferred.reject('error');
            $rootScope.$apply();

            expect(mockAccountService.create).toHaveBeenCalledWith(controller.model);
            expect(NotificationService.error).toHaveBeenCalledWith('error');
        });
    });
})();
