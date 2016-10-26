(function() {
  "use strict";

  angular
    .module("salte-auth-angular-example")
    .factory("githubResource", ["$resource", githubResource]);

  function githubResource($resource) {
    return $resource("https://api.salte.io/github/1.0/users/:username");
  }

}());
