'use strict';

var module = angular.module('salte-auth-angular-example', ['ngRoute', 'salte.auth-angular', 'ngResource', 'ui.bootstrap']);

module.config(['$routeProvider', '$httpProvider', 'salteAuthServiceProvider', function($routeProvider, $httpProvider, salteAuthServiceProvider) {
  $routeProvider.when("/Home", {
    controller: "HomeController",
    templateUrl: "templates/home.html"
  }).when("/GithubUsers", {
    controller: "GithubUsers",
    controllerAs: 'vm',
    templateUrl: "templates/githubUsers.html"
  }).when("/UserProfile", {
    controller: "UserController",
    templateUrl: "templates/user.html"
  }).otherwise({ redirectTo: "/Home" });

  // NOTE: This is for GitHub Pages, you won't have to do this unless you have a specific callback url
  var redirectUris = {
    'https://davewoodward.github.io': 'https://davewoodward.github.io/salte-auth-angular-example/'
  };

  salteAuthServiceProvider.init({
      responseType: 'id_token',
      scope: 'openid',
      clientId: 'QYoBNKhbs1VFW8dJXIqUWR3JBFQa',
      url: 'https://api.salte.io/',
      redirectUri: redirectUris[location.origin] || location.origin,
      securedEndpoints: {"https://api.salte.io/" : "Gateway"},
      anonymousEndpoints: ['templates'],
      requireAuthentication: true
    },
    $httpProvider
  );
}]);
