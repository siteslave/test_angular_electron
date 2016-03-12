'use strict';

angular.module('app.controllers.Detail', [])
  .controller('DetailCtrl', function ($scope, $stateParams) {

    $scope.id = $stateParams.id;
    $scope.name = $stateParams.name;

  });