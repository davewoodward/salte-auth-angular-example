'use strict';

var module = angular.module('salte-auth-angular-example', ['ngRoute', 'salte.auth-angular', 'ngResource', 'ui.bootstrap']);

module.config(['$routeProvider', '$httpProvider', '$locationProvider', 'salteAuthServiceProvider', function($routeProvider, $httpProvider, $locationProvider, salteAuthServiceProvider) {
  $routeProvider.when("/Home", {
    controller: "HomeController",
    templateUrl: "templates/home.html"
  }).when("/GithubUsers", {
    controller: "GithubUsers",
    controllerAs: 'vm',
    templateUrl: "templates/githubUsers.html"
  }).when("/UserProfile", {
    controller: "UserController",
    controllerAs: "vm",
    templateUrl: "templates/user.html"
  }).otherwise({ redirectTo: "/Home" });

  $locationProvider.hashPrefix('');

  salteAuthServiceProvider.init({
      responseType: 'id_token',
      scope: 'openid',
      clientId: 'QYoBNKhbs1VFW8dJXIqUWR3JBFQa',
      url: 'https://api.salte.io/',
      redirectUri: 'http://localhost:9090/',
      securedEndpoints: {"https://api.salte.io/" : "Gateway"},
      anonymousEndpoints: ['templates'],
      requireAuthentication: true
    },
    $httpProvider
  );
}]);
