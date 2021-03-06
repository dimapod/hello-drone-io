'use strict';

angular.module('angularYoApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
      .when('/about', { templateUrl: 'views/about.html', controller: 'MainCtrl' })
      .otherwise({
        redirectTo: '/'
      });
  });
