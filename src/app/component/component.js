(function () {
  'use strict';
  angular.module('app')
    .component('listComponent', {
      bindings: {
        message: '<'
      },
      url: '/component',
      templateUrl: 'app/component/component.html',
      controller: function () {
        this.message = 'Component Message';
      }
    });
}());
