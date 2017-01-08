(function() {
  'use strict';

  angular.module('salte-auth-angular-example').controller('UserController', ['salteAuthService', UserController ]);

  function UserController(salteAuthService) {
    var vm = this;
    vm.userInfo = salteAuthService.userInfo;
    alert(JSON.stringify(salteAuthService.userInfo));
  }
}());
