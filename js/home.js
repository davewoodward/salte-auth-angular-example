(function() {
  'use strict';

  angular.module('salte-auth-angular-example').controller('HomeController', [ HomeController ]);

  function HomeController() {
    var vm = this;

    vm.value = "This is an unsecured home page.";
  }


}());
