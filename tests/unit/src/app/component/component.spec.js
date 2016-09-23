describe('Component', function () {
  var $componentController, bindings, ctrl;

  beforeEach(module('app'));
  beforeEach(inject(function (_$componentController_) {
    $componentController = _$componentController_;
  }));
  it('should have an array with results', function () {
    var bindings = {
      results: []
    };
    var ctrl = $componentController('listComponent', null, bindings);
    expect(ctrl.results).toEqual(jasmine.any(Array));
  });
  it('should model query', function () {
    var bindings = {
      query: 'a'
    };
    var ctrl = $componentController('listComponent', null, bindings);
    expect(ctrl.query).toEqual('a');
  });
  it('should only search if it has 3 or more characters', function () {
    var bindings = {};
    var ctrl = $componentController('listComponent', null, bindings);
    ctrl.search('ab');
    expect(ctrl.results).toEqual([]);
  });
});
