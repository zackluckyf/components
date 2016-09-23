describe('search factory', function () {
  'use strict';
  var searchFactory;
  beforeEach(module('app.searchFactory'));
  beforeEach(inject(function (_searchFactory_) {
    searchFactory = _searchFactory_;
  }));
  it('should define get data function when initialized', function () {
    expect(searchFactory.getDatafn).toBeDefined();
  });
  it('should return and array of input', function () {
    expect(searchFactory.getDatafn('input')).toEqual(['input']);
  });
});
