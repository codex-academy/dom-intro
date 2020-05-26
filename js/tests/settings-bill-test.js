//CALL COST
describe("The Bill With Settings Widget", function () {
	describe("The bill with settings factory function", function () {
		it("Should be able to set call cost", function () {
			var settingsBill = BillWithSettings();
			settingsBill.setCallCost(1.85),
				assert.equal(1.85, settingsBill.getCallCost());

			var settingsBill2 = BillWithSettings();

			settingsBill2.setCallCost(2.75),
				assert.equal(2.75, settingsBill2.getCallCost());
		})
		//SMS COST
		it("Should be able to set the sms cost", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setSmsCost(0.85);
			assert.equal(0.85, settingsBill.getSmsCost());

			let settingsBill2 = BillWithSettings();

			settingsBill2.setSmsCost(0.75);
			assert.equal(0.75, settingsBill2.getSmsCost());
		})
		//CALL AND SMS COST
		it("Should be able to set the call and sms", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setSmsCost(0.85);
			settingsBill.setCallCost(1.85);
			assert.equal(0.85, settingsBill.getSmsCost());
			assert.equal(1.85, settingsBill.getCallCost());

			let settingsBill2 = BillWithSettings();

			settingsBill2.setSmsCost(0.75);
			settingsBill2.setCallCost(2.75);
			assert.equal(0.75, settingsBill2.getSmsCost());
			assert.equal(2.75, settingsBill2.getCallCost());
		})
		//WARNING LEVEL
		it("Should be able to set the warning level", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setWarningLevel(20);
			assert.equal(20, settingsBill.getWarningLevel());

			let settingsBill2 = BillWithSettings();

			settingsBill2.setWarningLevel(40);
			assert.equal(40, settingsBill2.getWarningLevel());
		})
		//CRITICAL LEVEL
		it("Should be able to set the critical level", function () {
			let settingsBill = BillWithSettings();

			settingsBill.setCriticalLevel(50);
			assert.equal(50, settingsBill.getCriticalLevel());

			let settingsBill2 = BillWithSettings();

			settingsBill2.setCriticalLevel(60);
			assert.equal(60, settingsBill2.getCriticalLevel());
		})
	})

	//USING THE VALUES SET
	describe("Use values function", function () {
		it("Should be able to use the call cost set", function () {
			var settingsBill = BillWithSettings();
			settingsBill.setCriticalLevel(10);
			settingsBill.setCallCost(2.25);
			settingsBill.setSmsCost(0.85);

			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal(6.75, settingsBill.getTotalCost())
			assert.equal(6.75, settingsBill.getTotalCallCost())
			assert.equal(0.00, settingsBill.getTotalSmsCost())
		})

		it("Should be able to use the call cost set for 2 calls at 1.35 each", function () {
			var settingsBill = BillWithSettings();
			settingsBill.setCriticalLevel(10);
			settingsBill.setCallCost(1.35);
			settingsBill.setSmsCost(0.85);

			settingsBill.makeCall();
			settingsBill.makeCall();


			assert.equal(2.70, settingsBill.getTotalCost())
			assert.equal(2.70, settingsBill.getTotalCallCost())
			assert.equal(0.00, settingsBill.getTotalSmsCost())
		})
		it("Should be able to send 2 sms at 0.85 each", function () {
			var settingsBill = BillWithSettings();
			settingsBill.setCriticalLevel(10);
			settingsBill.setCallCost(1.35);
			settingsBill.setSmsCost(0.85);

			settingsBill.sendSms();
			settingsBill.sendSms();


			assert.equal(1.70, settingsBill.getTotalCost())
			assert.equal(0.00, settingsBill.getTotalCallCost())
			assert.equal(1.70, settingsBill.getTotalSmsCost())
		})
		it("Should be able to send 2 sms at 0.85 each and make a call at 1.35", function () {
			var settingsBill = BillWithSettings();
			settingsBill.setCriticalLevel(10);
			settingsBill.setCallCost(1.35);
			settingsBill.setSmsCost(0.85);

			settingsBill.sendSms();
			settingsBill.makeCall();
			settingsBill.sendSms();


			assert.equal(3.05, settingsBill.getTotalCost())
			assert.equal(1.35, settingsBill.getTotalCallCost())
			assert.equal(1.70, settingsBill.getTotalSmsCost())
		})
	})
	//TESTING WARNING & CRITICAL LEVEL 
	//WARNING
	describe("The warning and critical level", function () {
		it("It should return a class name of warning if warning level is reached", function () {
			var settingsBill = BillWithSettings();

			settingsBill.setCallCost(1.35);
			settingsBill.setSmsCost(0.85);
			settingsBill.setWarningLevel(5);
			settingsBill.setCriticalLevel(10);

			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal("warning", settingsBill.totalClassName())
		})
		//CRITICAL
		it("It should return a class name of 'critcal' if critical level has been reached", function () {
			var settingsBill = BillWithSettings();

			settingsBill.setCallCost(2.50);
			settingsBill.setSmsCost(0.85);
			settingsBill.setWarningLevel(5)
			settingsBill.setCriticalLevel(10);

			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal("danger", settingsBill.totalClassName())
		})
		it("It should should stop the Total Call cost from increasing when the critical level has been reached", function () {
			var settingsBill = BillWithSettings();

			settingsBill.setCallCost(2.50);
			settingsBill.setSmsCost(0.85);
			settingsBill.setWarningLevel(5)
			settingsBill.setCriticalLevel(10);

			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal("danger", settingsBill.totalClassName())
			assert.equal(10, settingsBill.getTotalCallCost())
		})
		it("It should allow the total to increase after critical level has been reached and allow for an increase of the critical level", function () {
			var settingsBill = BillWithSettings();

			settingsBill.setCallCost(2.50);
			settingsBill.setSmsCost(0.85);
			settingsBill.setWarningLevel(8)
			settingsBill.setCriticalLevel(10);

			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();
			settingsBill.makeCall();

			assert.equal("danger", settingsBill.totalClassName())
			assert.equal(10, settingsBill.getTotalCallCost())

			settingsBill.setCriticalLevel(20);

			assert.equal("warning", settingsBill.totalClassName())
			settingsBill.makeCall();
			settingsBill.makeCall();
			assert.equal(15, settingsBill.getTotalCallCost())
		})
	})
})