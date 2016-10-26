'use strict';

var module = angular.module('salte-auth-angular-example', ['ngRoute', 'salte.auth-angular', 'ngResource', 'ui.bootstrap']);

module.config(['$routeProvider', '$httpProvider', 'salteAuthServiceProvider', function($routeProvider, $httpProvider, salteAuthServiceProvider) {
  $routeProvider.when("/Home", {
    controller: "HomeController",
    templateUrl: "templates/home.html"
  }).when("/GithubUsers", {
    controller: "GithubUsers",
    controllerAs: 'vm',
    templateUrl: "templates/githubUsers.html",
    requireAuthentication: true
  }).when("/UserProfile", {
    controller: "UserController",
    templateUrl: "templates/user.html",
    requireAuthentication: true
  }).otherwise({ redirectTo: "/Home" });

  salteAuthServiceProvider.init({
      responseType: 'id_token',
      scope: 'openid',
      clientId: 'XE9mdXnr0j2z6_nED5ifDIW4S9oa',
      url: 'https://api.salte.io/',
      redirectUri: 'http://app:9090/',
      securedEndpoints: {"https://api.salte.io/" : "Gateway"},
      anonymousEndpoints: ['templates']
    },
    $httpProvider
  );
}]);
