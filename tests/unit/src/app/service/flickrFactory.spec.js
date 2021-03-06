describe('search factory', function () {
  'use strict';
  var searchFactory, rootScope, httpBackend;
  beforeEach(module('app.searchFactory'));
  beforeEach(inject(function (_searchFactory_, $rootScope, $httpBackend) {
    rootScope = $rootScope;
    $httpBackend.whenGET('colors.json').respond({
      colorsArray: 'input'
    });
    httpBackend = $httpBackend;
    searchFactory = _searchFactory_;
  }));
  it('should return an array of input', function () {
    var promise = searchFactory.getDatafn('input');
    rootScope.$digest();
    httpBackend.flush();
    expect(promise.$$state.value).toEqual(['input']);
  });
});
