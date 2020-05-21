describe("The Text Bill Widget", function () {
    describe("The Text Input Bill Factory Function", function () {
        it("Should be able to set the call cost", function () {
            //testOne
            var billType = TextBill();

            billType.setCallCost(2.75); //set call cost
            assert.equal(2.75, billType.getCallCost())//getting value of call cost set

            //testTwo
            var billType2 = TextBill();

            billType2.setCallCost(1.65); //set call cost
            assert.equal(1.65, billType2.getCallCost())//getting value of call cost set
        })
        it("Should be able to set the sms cost", function () {
            //testOne
            var billType = TextBill();

            billType.setSmsCost(0.75); //set sms cost
            assert.equal(0.75, billType.getSmsCost())//getting value of sms cost set

            //testTwo
            var billType2 = TextBill();

            billType2.setSmsCost(0.65); //set call cost
            assert.equal(0.65, billType2.getSmsCost())//getting value of sms cost set
        })
        it("Should be able to set the call & sms cost", function () {
            //testOne
            var billType = TextBill();

            billType.setCallCost(2.75); //set call cost
            billType.setSmsCost(0.75); //set sms cost
            assert.equal(0.75, billType.getSmsCost())//getting value of sms cost set
            assert.equal(2.75, billType.getCallCost())//getting value of call cost set

            //testTwo
            var billType2 = TextBill();

            billType2.setCallCost(1.65); //set call cost
            billType2.setSmsCost(0.65); //set call cost
            assert.equal(0.65, billType2.getSmsCost())//getting value of sms cost set
            assert.equal(1.65, billType2.getCallCost())//getting value of call cost set
        })
        it("Should be able to set the warning level", function () {
            //testOne
            var billType = TextBill();

            billType.setWarningLevel(30); //set warning Level
            assert.equal(30, billType.getWarningLevel())//getting value warning level set

            //testTwo
            var billType2 = TextBill();

            billType2.setWarningLevel(40); //set warning level
            assert.equal(40, billType2.getWarningLevel())//getting value of warning level set
        })
        it("Should be able to set the critical level", function () {
            //testOne
            var billType = TextBill();

            billType.setCriticalLevel(30); //set critical level
            assert.equal(30, billType.getCriticalLevel())//getting value of critical level set

            //testTwo
            var billType2 = TextBill();

            billType2.setCriticalLevel(40); //set critical level
            assert.equal(40, billType2.getCriticalLevel())//getting value of critical level set
        })
    })
    describe("Using The Values Function", function () {
        it("Should be able to use the call cost set for 3 calls at 2.75 each", function () {
            var billType = TextBill();

            billType.setCriticalLevel(30);
            billType.setCallCost(2.75); //set call cost
            billType.setSmsCost(0.75); //set sms cost

            billType.inputCall();
            billType.inputCall();
            billType.inputCall();

            assert.equal(8.25, billType.getTotalCost())
            assert.equal(8.25, billType.getTotalCallCost())
            assert.equal(0, billType.getTotalSmsCost())
        })
        it("Should be able to use the call cost set for 4 calls at 1.50 each", function () {
            var billType = TextBill();

            billType.setCriticalLevel(30);
            billType.setCallCost(1.50); //set call cost
            billType.setSmsCost(0.80); //set sms cost

            billType.inputCall();
            billType.inputCall();
            billType.inputCall();
            billType.inputCall();

            assert.equal(6, billType.getTotalCost())
            assert.equal(6, billType.getTotalCallCost())
            assert.equal(0, billType.getTotalSmsCost())
        })
        it("Should be able to use the sms cost set for 4 sms at 0.80 each", function () {
            var billType = TextBill();

            billType.setCriticalLevel(30);
            billType.setCallCost(2.75); //set call cost
            billType.setSmsCost(0.80); //set sms cost

            billType.inputSms();
            billType.inputSms();
            billType.inputSms();
            billType.inputSms();

            assert.equal(3.20, billType.getTotalCost())
            assert.equal(0, billType.getTotalCallCost())
            assert.equal(3.20, billType.getTotalSmsCost())
        })
        it("Should be able to use the sms cost set for 3 sms at 0.70 each", function () {
            var billType = TextBill();

            billType.setCriticalLevel(30);
            billType.setCallCost(2.75); //set call cost
            billType.setSmsCost(0.75); //set sms cost

            billType.inputSms();
            billType.inputSms();
            billType.inputSms();

            assert.equal(2.25, billType.getTotalCost())
            assert.equal(0, billType.getTotalCallCost())
            assert.equal(2.25, billType.getTotalSmsCost())
        })
        it("Should be able to use the sms cost set for 3 sms at 0.70 each an 1 call at 2.75", function () {
            var billType = TextBill();

            billType.setCriticalLevel(30);
            billType.setCallCost(2.75); //set call cost
            billType.setSmsCost(0.75); //set sms cost

            billType.inputSms();
            billType.inputSms();
            billType.inputCall();
            billType.inputSms();

            assert.equal(5, billType.getTotalCost())
            assert.equal(2.75, billType.getTotalCallCost())
            assert.equal(2.25, billType.getTotalSmsCost())
        })
        
    })
    describe("Warning and critical level function", function () {
        it("Should return the classname of 'warning' once the warning level of 10 is reached", function () {
            var billType = TextBill();

            billType.setCallCost(2.75);
            billType.setSmsCost(0.65);
            billType.setWarningLevel(10);
            billType.setCriticalLevel(30);

            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputSms();//making an sms
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputSms();//making an sms

            assert.equal("warning", billType.totalClassName())
        })
        it("Should return the classname of 'warning' once the warning level of 15 is reached", function () {
            var billType = TextBill();

            billType.setCallCost(3.75);
            billType.setSmsCost(0.65);
            billType.setWarningLevel(15);
            billType.setCriticalLevel(30);

            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputSms();//making an sms
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputSms();//making an sms
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputSms();//making an sms

            assert.equal("warning", billType.totalClassName())
        })
        it("Should return the classname of 'critical' once the critical level of 20 is reached", function () {
            var billType = TextBill();

            billType.setCallCost(3.75);
            billType.setSmsCost(0.65);
            billType.setCriticalLevel(20);

            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputSms();//making an sms
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputSms();//making an sms
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputSms();//making an sms

            assert.equal("critical", billType.totalClassName())
        })
        it("Should return the classname of 'critical' once the critical level of 30 is reached", function () {
            var billType = TextBill();

            billType.setCallCost(3.75);
            billType.setSmsCost(0.65);
            billType.setCriticalLevel(30);

            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputSms();//making an sms
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputSms();//making an sms
            billType.inputCall();//making a call
            billType.inputCall();//making a call
            billType.inputSms();//making an sms

            assert.equal("critical", billType.totalClassName())
        })
    })
})