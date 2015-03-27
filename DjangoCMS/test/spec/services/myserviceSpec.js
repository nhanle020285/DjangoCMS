/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: myService', function () {

    // load the service's module
    beforeEach(module('djangoCmsApp.services.MyService'));

    // instantiate service
    var myService;
    beforeEach(inject(function (_myService_) {
      myService = _myService_;
    }));

    it('should do something', function () {
      expect(!!myService).toBe(true);
    });

  });
});
