describe("The Calculate Bill Widget", function () {
    describe("The calculate bill factory function", function () {
        //SETTING THE CALL COST
        it("Should be able to set the call cost", function () {
            //testOne
            var theBill = CalculateBill();

            theBill.setCallCost(2.75); //set call cost
            assert.equal(2.75, theBill.getCallCost()) //getting the value of the set call cost
            //testTwo
            var theBill2 = CalculateBill();

            theBill2.setCallCost(3.75); //set call cost
            assert.equal(3.75, theBill2.getCallCost()) //getting the value of the set call cost
        })
        //SMS COST
        it("Should be able to set the sms cost", function () {
            //testOne
            var theBill = CalculateBill();

            theBill.setSmsCost(0.75); //set sms cost
            assert.equal(0.75, theBill.getSmsCost()) //getting the value of the set sms cost
            //testTwo
            var theBill2 = CalculateBill();

            theBill2.setSmsCost(0.85); //set sms cost
            assert.equal(0.85, theBill2.getSmsCost()) //getting the value of the set sms cost
        })
        //SMS & CALL COST
        it("Should be able to set the call & sms cost", function () {
            //testOne
            var theBill = CalculateBill();

            theBill.setCallCost(2.75); //set call cost
            theBill.setSmsCost(0.75); //set sms cost
            assert.equal(0.75, theBill.getSmsCost()) //getting the value of the set call cost
            assert.equal(2.75, theBill.getCallCost()) //getting the value of the set call cost

            //testTwo
            var theBill2 = CalculateBill();

            theBill2.setCallCost(3.75); //set call cost
            theBill2.setSmsCost(0.85); //set call cost
            assert.equal(0.85, theBill2.getSmsCost()) //getting the value of the set call cost
            assert.equal(3.75, theBill2.getCallCost()) //getting the value of the set call cost
        })
        //THE WARNING LEVEL
        it("Should be able to set the warning level", function () {
            //testOne
            var theBill = CalculateBill();

            theBill.setWarningLevel(20); //setting the warning level
            assert.equal(20, theBill.getWarningLevel()) //getting the warning level set

            //testTwo
            var theBill2 = CalculateBill();

            theBill2.setWarningLevel(25); //setting the warning level
            assert.equal(25, theBill2.getWarningLevel()) //getting the warning level set
        })
        //THE CRITICAL LEVEL 
        it("Should be able to set the critical level", function () {
            //testOne
            var theBill = CalculateBill();

            theBill.setCriticalLevel(30); //setting the critical level
            assert.equal(30, theBill.getCriticalLevel()) //getting the critical level set

            //testTwo
            var theBill2 = CalculateBill();

            theBill2.setCriticalLevel(35); //setting the critical level
            assert.equal(35, theBill2.getCriticalLevel()) //getting the critical level set
        })
    })
    describe("Using the values function", function () {
        it("Should be able to use the call cost set for 3 calls at 2.75 each", function () {
            var theBill = CalculateBill();

            theBill.setCriticalLevel(10);
            theBill.setCallCost(2.75);//seting the call cost 
            theBill.setSmsCost(0.85);//setting the sms cost

            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeCall();//making a call

            assert.equal(8.25, theBill.getTotalCost())//the overall total
            assert.equal(8.25, theBill.getTotalCallCost())//the call total
            assert.equal(0.00, theBill.getTotalSmsCost())//the sms total
        })
        it("Should be able to use the call cost set for 4 calls at 1.45 each", function () {
            var theBill = CalculateBill();

            theBill.setCriticalLevel(10);
            theBill.setCallCost(1.45);
            theBill.setSmsCost(0.85);

            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeCall();//making a call

            assert.equal(5.80, theBill.getTotalCost())
            assert.equal(5.80, theBill.getTotalCallCost())
            assert.equal(0.00, theBill.getTotalSmsCost())
        })
        it("Should be able to use the sms cost set for 4 sms at 0.45 each", function () {
            var theBill = CalculateBill();

            theBill.setCriticalLevel(10);
            theBill.setCallCost(1.45);
            theBill.setSmsCost(0.45);

            theBill.makeSms();//making an sms
            theBill.makeSms();//making an sms
            theBill.makeSms();//making an sms
            theBill.makeSms();//making an sms

            assert.equal(1.80, theBill.getTotalCost())
            assert.equal(0.00, theBill.getTotalCallCost())
            assert.equal(1.80, theBill.getTotalSmsCost())
        })
        it("Should be able to use the sms cost set for 4 sms at 0.65 each", function () {
            var theBill = CalculateBill();

            theBill.setCriticalLevel(10);
            theBill.setCallCost(1.45);
            theBill.setSmsCost(0.65);

            theBill.makeSms();//making an sms
            theBill.makeSms();//making an sms
            theBill.makeSms();//making an sms
            theBill.makeSms();//making an sms

            assert.equal(2.60, theBill.getTotalCost())
            assert.equal(0.00, theBill.getTotalCallCost())
            assert.equal(2.60, theBill.getTotalSmsCost())
        })
        it("Should be able to use the sms cost set and call cost set to make 1 sms and 2 calls", function () {
            var theBill = CalculateBill();

            theBill.setCriticalLevel(10);
            theBill.setCallCost(1.45);
            theBill.setSmsCost(0.65);

            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms

            assert.equal(3.55, theBill.getTotalCost())
            assert.equal(2.90, theBill.getTotalCallCost())
            assert.equal(0.65, theBill.getTotalSmsCost())
        })
    })
    describe("Warning and critical level function", function () {
        it("Should return the classname of 'warning' once the warning level of 10 is reached", function () {
            var theBill = CalculateBill();

            theBill.setCallCost(2.75);
            theBill.setSmsCost(0.65);
            theBill.setWarningLevel(10);
            theBill.setCriticalLevel(30);

            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms
            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms

            assert.equal("warning", theBill.totalClassName())
        })
        it("Should return the classname of 'warning' once the warning level of 20 is reached", function () {
            var theBill = CalculateBill();

            theBill.setCallCost(2.75);
            theBill.setSmsCost(0.65);
            theBill.setWarningLevel(20);
            theBill.setCriticalLevel(60);

            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms
            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms
            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms
            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms

            assert.equal("warning", theBill.totalClassName())
        })
        it("Should return the classname of 'critical' once the critical level of 10 is reached", function () {
            var theBill = CalculateBill();

            theBill.setCallCost(2.75);
            theBill.setSmsCost(0.65);
            theBill.setWarningLevel(5);
            theBill.setCriticalLevel(10);

            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms
            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms

            assert.equal("critical", theBill.totalClassName())
        })
        it("Should return the classname of 'critical' once the critical level of 20 is reached", function () {
            var theBill = CalculateBill();

            theBill.setCallCost(2.75);
            theBill.setSmsCost(0.65);
            theBill.setWarningLevel(5);
            theBill.setCriticalLevel(10);

            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms
            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms
            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms
            theBill.makeCall();//making a call
            theBill.makeCall();//making a call
            theBill.makeSms();//making an sms

            assert.equal("critical", theBill.totalClassName())
        })
    })
})