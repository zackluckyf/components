(function () {
  'use strict';
  function searchFactory ($http) {
    function getDatafn (input) {
      // var data = $http.get('http://google.com/?input')
      // parse(data)
      return [input];
    }

    return {
      getDatafn: getDatafn
    };
  }
  angular.module('app.searchFactory', [])
    .factory('searchFactory', searchFactory);
}());
