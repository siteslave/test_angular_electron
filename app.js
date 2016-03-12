
'use strict';

require('angular');

angular.module('app', [])
  .controller('MainCtrl', function ($scope) {
    $scope.name = 'Electron JS';

    $scope.showName = function () {
      alert($scope.name)
    };

    $scope.setName = function (_name, _name2) {
      $scope.name = _name;
      $scope.showName();
    };

    $scope.showType = false;

    $scope.userTypes = [
      {id: 1, name: 'Admin', department: 1},
      {id: 2, name: 'User', department: 2}
    ];

    $scope.departments = [
      {id: 1, name: 'Administrator'},
      {id: 2, name: 'Customer Service'}
    ];

    $scope.users = [
      {id: 1, name: 'Satit', type: 1},
      {id: 2, name: 'Monalisa', type: 1},
      {id: 3, name: 'John', type: 2}
    ];

    $scope.changeDepartment = function () {
      console.log('Department changed');
      console.log($scope.departmentId);
      $scope.showType = true;

      $scope.userTypes2 = [];

      $scope.userTypes.forEach(function (v) {
        if (v.department == $scope.departmentId) {
          $scope.userTypes2.push(v);
        }
      });

    };

    $scope.changeUserType = function() {
      $scope.users2 = [];

      $scope.users.forEach(function (v) {
        if (v.type == $scope.typeId) {
          $scope.users2.push(v);
        }
      })
    };

  });