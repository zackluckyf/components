describe("Component", function() {
    var $componentController;

    beforeEach(module('app'));
    beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;
    }));
    it("should have a message that equals 'Component Message'", function() {
        var bindings = {
            message: 'Component Message'
        };
        var ctrl = $componentController('listComponent', null, bindings);
        expect(ctrl.message).toEqual('Component Message');
    });
});
