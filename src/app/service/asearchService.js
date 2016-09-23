(function () {
  'use strict';

  function searchFactory ($http, parseFactory) {
    function getDatafn (input) {
      return $http.get('colors.json').then(function (response) {
        return response.data;
      }).then(function (data) {
        return parseFactory.parse(data);
      });
    }

    return {
      getDatafn: getDatafn
    };
  }

  angular.module('app.searchFactory', [])
    .factory('searchFactory', searchFactory);
}());
