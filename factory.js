'use strict';

angular.module('app.service', [])
  .factory('UserService', function () {

    let userTypes = [
      {id: 1, name: 'Admin', department: 1},
      {id: 2, name: 'User', department: 2}
    ];

    let departments = [
      {id: 1, name: 'Administrator'},
      {id: 2, name: 'Customer Service'}
    ];

    let users = [
      {id: 1, name: 'Satit', type: 1},
      {id: 2, name: 'Monalisa', type: 1},
      {id: 3, name: 'John', type: 2}
    ];

    return {
      getDetail(userId) {
        let user = null;

        users.forEach(function (v) {
          if (v.id == userId) user = v.name;
        });

        return user;

      },
      getUsers(typeId) {
        let _users = [];

        users.forEach(function (v) {
          if (v.type == typeId) {
            _users.push(v);
          }
        });

        return _users;
      },
      getDepartment() {
        return departments;
      },
      getUserTypes(departmentId) {
        let users = [];

        userTypes.forEach(function (v) {
          if (v.department == departmentId) {
            users.push(v);
          }
        });

        return users;
      }
    }

  });