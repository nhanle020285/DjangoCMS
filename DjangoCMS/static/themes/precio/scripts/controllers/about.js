define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name djangoCmsApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the djangoCmsApp
   */
  angular.module('djangoCmsApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
