describe("the calculate button factory function", function() {
    describe("set values", function() {
        it("should set the call cost", function() {
            var calculateBill = calculatedBill();
            assert.equal(2.75, calculateBill.add("call"));
        })
        it("should set the sms cost", function() {
            var calculateBill = calculatedBill();
            calculateBill.setSmsCost(0.75),
                assert.equal(0.75, calculateBill.getSmsCost());
        })
        it("should calculate the bill for a call given string", function() {
            var calculateBill = calculatedBill();
            assert.equal(24.75, calculateBill.add("call,call,call,call,call,call,call,call,call"))
        })
        it("should calculate the bill for any given string", function() {
            var calculateBill = calculatedBill();
            assert.equal(22.25, calculateBill.add("call,call,sms,call,call,call,sms,call,sms,call,sms"))
        })
    })
})
describe("The adding of color function", function() {
    it("should return the color of string as black", function() {
        var calculateBill = calculatedBill();
        assert.equal("", calculateBill.color(calculateBill.add("call")))
    });
    it("should return the color string as red", function() {
        var calculateBill = calculatedBill();
        assert.equal("danger", calculateBill.color(calculateBill.add("call,call,call,call,call,sms,call,call,call,call,call,call")))

    });
    it("should return the color string as orange", function() {
        var calculateBill = calculatedBill();
        assert.equal("warning", calculateBill.color(calculateBill.add("call,sms,call,call,sms,sms,call,call,call,call,call,call")))
    });
});