(function () {
  angular.module('app', [])
    .config(function (searchProvider) {
      searchProvider.url('colors2.json');
    });
})();
