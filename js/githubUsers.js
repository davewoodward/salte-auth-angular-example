(function() {
  'use strict';

  angular.module('salte-auth-angular-example').controller('GithubUsers', [ "githubResource", GithubUsers ]);

  function GithubUsers(githubResource) {
    var vm = this;

    vm.users = [];
    vm.filteredUsers = [];
    vm.currentPage = 1;
    vm.numPerPage = 5;
    vm.maxSize = 5;
    githubResource.query(function(data) {
        vm.users = data;
        vm.refreshFilter();
    });

    vm.refreshFilter = function() {
         var begin = (vm.currentPage - 1) * vm.numPerPage,
             end = begin + vm.numPerPage;
         vm.filteredUsers = vm.users.slice(begin, end);
     };
  }


}());
