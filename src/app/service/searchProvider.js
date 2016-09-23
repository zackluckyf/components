(function () {
  function searchProvider () {
    var url = 'colors.json';
    this.url = function (value) {
      url = value || url;
    };
    this.$get = function ($http, parseFactory) {
      function getDatafn (input) {
        return $http.get(this.url).then(function (response) {
          return response.data;
        }).then(function (data) {
          return parseFactory.parse(data);
        });
      }

      return {
        getDatafn: getDatafn
      };
    };
  }

  angular.module('app')
    .provider('search', searchProvider);
}());
