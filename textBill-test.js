describe("the textBill factory function", function() {
    describe("use values", function() {
        it("should be able to increment 2.75 when call is entered up to 19 calls without sms", function() {
            var textBill = textBillTotal();
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            assert.deepEqual({
                totalOfTextBill: 52.25,
                callOfTextBill: 52.25,
                smsOfTextBill: 0,
            }, textBill.textBillEntered());

        });
        it("should be able to increment 0.75 when sms is entered up to 7 times without call", function() {
            var textBill = textBillTotal();
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            assert.deepEqual({
                totalOfTextBill: 5.25,
                callOfTextBill: 0,
                smsOfTextBill: 5.25,
            }, textBill.textBillEntered());

        });
        it("should be able to increment both call cost and sms cost", function() {
            var textBill = textBillTotal();
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            assert.deepEqual({
                totalOfTextBill: 10.50,
                callOfTextBill: 8.25,
                smsOfTextBill: 2.25,
            }, textBill.textBillEntered());

        });
        it("should be able to change color to orange when at 30", function() {
            var textBill = textBillTotal();
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            assert.equal("warning", textBill.color())
        });
        it("should be able to change color to red when at 50", function() {
            var textBill = textBillTotal();
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("sms")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            textBill.textBillAdd("call")
            assert.equal("danger", textBill.color())
        })
    })
});