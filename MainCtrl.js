'use strict';

angular.module('app.controller.Main', ['app.service'])
  .controller('MainCtrl', function ($scope, $state, UserService) {

    $scope.getDetail = function (user) {
      $state.go('detail', user)
    };

    $scope.name = 'Electron JS';

    $scope.showName = function () {
      alert($scope.name)
    };

    $scope.setName = function (_name, _name2) {
      $scope.name = _name;
      $scope.showName();
    };

    $scope.showType = false;

    $scope.departments = UserService.getDepartment();

    $scope.changeDepartment = function () {

      $scope.showType = true;
      $scope.userTypes = UserService.getUserTypes($scope.departmentId);

    };

    $scope.changeUserType = function() {

      $scope.users = UserService.getUsers($scope.typeId);

    };

  })