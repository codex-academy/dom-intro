describe("The calculate bill function", function(){

it(" If two calls were made , it should return 5.5", function(){
    var calculateBill = calculateBtnClicked();
//console.log( calculateBill.setCallOrSms("sms"))
assert.equal(5.50, calculateBill.setCallOrSms("call,call"));

});


it("If two sms's were made , it should return 1.5 ", function(){
    var calculateBill = calculateBtnClicked();

assert.equal(1.50, calculateBill.setCallOrSms("sms,sms"));

});

it("Should return a 'warning' class name if total reaches 20", function(){
    var calculateBill = calculateBtnClicked();
   assert.equal(20.50, calculateBill.setCallOrSms("call,sms,call,sms,sms,call,sms,call,sms,sms,call,sms,sms,sms"));
   assert.equal("warning", calculateBill.warningLevel());
})
it("Should return a 'critical' class name if total reachs 30", function(){
    var calculateBill = calculateBtnClicked();

    assert.equal(30.25, calculateBill.setCallOrSms("call,call,call,call,call,call,call,call,call,call,call"));
    assert.equal("danger", calculateBill.criticalLevel())
})
});
