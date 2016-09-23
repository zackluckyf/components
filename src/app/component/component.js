(function () {
  'use strict';
  angular.module('app')
    .component('listComponent', {
      bindings: {
        results: '<',
        query: '=',
        search: '<',
        time: '<'
      },
      url: '/component',
      templateUrl: 'app/component/component.html',
      controller: function (search) {
        var vm = this;
        this.results = [];
        this.time = 500;
        this.search = function (input) {
          if (input.length > 2) {
            search.getDatafn(input).then(function (response) {
              vm.results = response;
            });
          } else {
            vm.results = [];
          }
        };
      }
    });
}());
