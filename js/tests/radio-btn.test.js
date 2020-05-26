describe("The Radio Bill Widget", function () {
    describe("The radio bill factory function", function () {
        it("Should be able to set the call cost", function () {
            //test one
            var radioBill = RadioBillBtn();

            radioBill.setCallCost(2.75);
            assert.equal(2.75, radioBill.getCallCost());

            //test two
            var radioBill2 = RadioBillBtn();

            radioBill2.setCallCost(1.45);
            assert.equal(1.45, radioBill2.getCallCost());
        })
        it("Should be able to set the sms cost", function () {
            //test one
            var radioBill = RadioBillBtn();

            radioBill.setSmsCost(0.75);
            assert.equal(0.75, radioBill.getSmsCost());

            //test two
            var radioBill2 = RadioBillBtn();

            radioBill2.setSmsCost(0.85);
            assert.equal(0.85, radioBill2.getSmsCost());
        })
        it("Should be able to set the call & sms cost", function () {
            //test one
            var radioBill = RadioBillBtn();

            radioBill.setCallCost(2.75);
            radioBill.setSmsCost(0.75);
            assert.equal(0.75, radioBill.getSmsCost());
            assert.equal(2.75, radioBill.getCallCost());

            //test two
            var radioBill2 = RadioBillBtn();

            radioBill2.setCallCost(1.45);
            radioBill2.setSmsCost(0.85);
            assert.equal(0.85, radioBill2.getSmsCost());
            assert.equal(1.45, radioBill2.getCallCost());
        })
        it("Should be able to set the warning level", function () {
            //test one
            var radioBill = RadioBillBtn();

            radioBill.setWarningLevel(10);
            assert.equal(10, radioBill.getWarningLevel());

            //test two
            var radioBill2 = RadioBillBtn();

            radioBill2.setWarningLevel(20);
            assert.equal(20, radioBill2.getWarningLevel());
        })
        it("Should be able to set the critical level", function () {
            //test one
            var radioBill = RadioBillBtn();

            radioBill.setCriticalLevel(10);
            assert.equal(10, radioBill.getCriticalLevel());

            //test two
            var radioBill2 = RadioBillBtn();

            radioBill2.setCriticalLevel(20);
            assert.equal(20, radioBill2.getCriticalLevel());
        })
    })
    describe("Using the values function", function(){
        it("should be able to use the call cost set for 3 calls at 2.75 each", function(){
            //test one
            var radioBill = RadioBillBtn();

            radioBill.setCriticalLevel(30);
            radioBill.setCallCost(2.75); //set call cost
            radioBill.setSmsCost(0.75); //set sms cost

            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();

            assert.equal(8.25, radioBill.getTotalCost())
            assert.equal(8.25, radioBill.getTotalCallCost())
            assert.equal(0, radioBill.getTotalSmsCost())
        })
        it("should be able to use the sms cost set for 3 sms at 0.75 each", function(){
            //test one
            var radioBill = RadioBillBtn();

            radioBill.setCriticalLevel(30);
            radioBill.setCallCost(2.75); //set call cost
            radioBill.setSmsCost(0.75); //set sms cost

            radioBill.selectSms();
            radioBill.selectSms();
            radioBill.selectSms();

            assert.equal(2.25, radioBill.getTotalCost())
            assert.equal(0, radioBill.getTotalCallCost())
            assert.equal(2.25, radioBill.getTotalSmsCost())
        })
        it("should be able to use the call cost set for 4 calls at 1.75 each", function(){
            //test one
            var radioBill = RadioBillBtn();

            radioBill.setCriticalLevel(30);
            radioBill.setCallCost(1.75); //set call cost
            radioBill.setSmsCost(0.75); //set sms cost

            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();

            assert.equal(7, radioBill.getTotalCost())
            assert.equal(7, radioBill.getTotalCallCost())
            assert.equal(0, radioBill.getTotalSmsCost())
        })
        it("should be able to use the sms cost set for 4 sms at 0.60 each", function(){
            //test one
            var radioBill = RadioBillBtn();

            radioBill.setCriticalLevel(30);
            radioBill.setCallCost(2.75); //set call cost
            radioBill.setSmsCost(0.60); //set sms cost

            radioBill.selectSms();
            radioBill.selectSms();
            radioBill.selectSms();
            radioBill.selectSms();

            assert.equal(2.40, radioBill.getTotalCost())
            assert.equal(0, radioBill.getTotalCallCost())
            assert.equal(2.40, radioBill.getTotalSmsCost())
        })
        it("should be able to use the sms cost set for 4 sms at 0.60 each", function(){
            //test one
            var radioBill = RadioBillBtn();

            radioBill.setCriticalLevel(30);
            radioBill.setCallCost(2.75); //set call cost
            radioBill.setSmsCost(0.60); //set sms cost

            radioBill.selectSms();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectSms();
            radioBill.selectSms();
            radioBill.selectSms();

            assert.equal(7.90, radioBill.getTotalCost())
            assert.equal(5.50, radioBill.getTotalCallCost())
            assert.equal(2.40, radioBill.getTotalSmsCost())
        })
    })
    describe("The Warning & Critical Level",function(){
        it("Should return the classlist of 'waning' when the warning level of 10 is reached", function(){

            var radioBill = RadioBillBtn();

            radioBill.setCriticalLevel(30);
            radioBill.setWarningLevel(10)
            radioBill.setCallCost(2.75); //set call cost
            radioBill.setSmsCost(0.75); //set sms cost

            radioBill.selectSms();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectSms();
            radioBill.selectSms();
            radioBill.selectSms();

            assert.equal("warning", radioBill.totalClassName())
        })
        it("Should return the classlist of 'waning' when the warning level of 15 is reached", function(){

            var radioBill = RadioBillBtn();

            radioBill.setCriticalLevel(30);
            radioBill.setWarningLevel(10)
            radioBill.setCallCost(2.75); //set call cost
            radioBill.setSmsCost(0.75); //set sms cost

            radioBill.selectSms();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectSms();
            radioBill.selectSms();
            radioBill.selectSms();

            assert.equal("warning", radioBill.totalClassName())
        })
        it("Should return the classlist of 'critical' when the critical level of 25 is reached", function(){

            var radioBill = RadioBillBtn();

            radioBill.setCriticalLevel(25);
            radioBill.setWarningLevel(10)
            radioBill.setCallCost(2.75); //set call cost
            radioBill.setSmsCost(0.75); //set sms cost

            radioBill.selectSms();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectSms();
            radioBill.selectSms();
            radioBill.selectSms();

            assert.equal("danger", radioBill.totalClassName())
        })
        it("Should return the classlist of 'critical' when the critical level of 35 is reached", function(){

            var radioBill = RadioBillBtn();

            radioBill.setCriticalLevel(35);
            radioBill.setWarningLevel(10)
            radioBill.setCallCost(2.75); //set call cost
            radioBill.setSmsCost(0.75); //set sms cost

            radioBill.selectSms();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall(); 
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectCall();
            radioBill.selectSms();
            radioBill.selectSms();
            radioBill.selectSms();

            assert.equal("danger", radioBill.totalClassName())
        })
    })
})