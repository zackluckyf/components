(function () {
  function parseFactory () {
    function parse (data) {
      data = data.colorsArray;
      if (!angular.isArray(data)) {
        data = [data];
      }
      return data;
    }

    return {
      parse: parse
    };
  }

  angular.module('app')
    .factory('parseFactory', parseFactory);
}());
