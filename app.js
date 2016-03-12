
'use strict';

require('angular');

angular.module('app', ['app.service'])
  .controller('MainCtrl', function ($scope, UserService) {
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

      //console.log('Department changed');
      //console.log($scope.departmentId);
      $scope.showType = true;
      $scope.userTypes = UserService.getUserTypes($scope.departmentId);

    };

    $scope.changeUserType = function() {

      $scope.users = UserService.getUsers($scope.typeId);

    };

  });