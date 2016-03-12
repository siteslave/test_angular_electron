'use strict';

angular.module('app.controllers.Detail', ['app.service'])
  .controller('DetailCtrl', function ($scope, $stateParams, UserService) {

    $scope.id = $stateParams.id;
    $scope.name = UserService.getDetail($stateParams.id);

  });