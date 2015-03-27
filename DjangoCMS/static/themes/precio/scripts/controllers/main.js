define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name djangoCmsApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the djangoCmsApp
   */
  angular.module('djangoCmsApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
