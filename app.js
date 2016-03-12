
'use strict';

require('angular');
require('angular-ui-router');

require('angular-animate');
require('angular-aria');
require('angular-messages');
require('angular-material');

angular.module('app', [
  'ui.router', 'ngMaterial',
  'app.controller.Main',
  'app.controllers.Detail'
])
.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: './templates/main.html',
      controller: 'MainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: './templates/about.html',
      controller: function ($scope) {
        $scope.name = 'Electron Application'
      }
    })
    .state('detail', {
      url: '/detail/:id/:name',
      templateUrl: './templates/detail.html',
      controller: 'DetailCtrl'
    })

})