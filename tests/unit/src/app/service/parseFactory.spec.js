describe('search factory', function () {
  'use strict';
  var searchFactory, rootScope, httpBackend, parseFactory;
  beforeEach(module('app.searchFactory'));
  beforeEach(inject(function (_searchFactory_, $rootScope, $httpBackend, _parseFactory_) {
    rootScope = $rootScope;
    parseFactory = _parseFactory_;
    spyOn(parseFactory, 'parse').and.returnValue([]);
    $httpBackend.whenGET('colors.json').respond({
      colorsArray: 'input'
    });
    httpBackend = $httpBackend;
    searchFactory = _searchFactory_;
  }));
  it('should call parseFactory.parse', function () {
    var promise = searchFactory.getDatafn('input');
    rootScope.$digest();
    httpBackend.flush();
    expect(parseFactory.parse).toHaveBeenCalled();
  });
});
