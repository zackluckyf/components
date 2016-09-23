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
      controller: function (searchFactory) {
        var vm = this;
        this.results = [];
        this.time = 500;
        this.search = function (input) {
          vm.results = searchFactory.getDatafn(input);
        };
      }
    });
}());
