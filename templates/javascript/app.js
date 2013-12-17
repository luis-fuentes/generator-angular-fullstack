'use strict';

angular.module('<%= scriptAppName %>', [<%= angularModules %>])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })<% if(mongo && mongoPassportUser) {%>
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/logout', {
        controller: 'LogoutCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })<% } %>
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
