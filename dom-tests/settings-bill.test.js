describe("The bill with settings function", function () {
  it("should be able to set the call cost", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setCallCost(1.85);
    assert.equal(1.85, settingsBill.getCallCost());

    let settingsBill2 = BillWithSettings();
    settingsBill2.setCallCost(2.75);
    assert.equal(2.75, settingsBill2.getCallCost());
  });

  it("should be able to set the sms cost", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setSmsCost(0.85);
    assert.equal(0.85, settingsBill.getSmsCost());

    let settingsBill2 = BillWithSettings();
    settingsBill2.setSmsCost(0.75);
    assert.equal(0.75, settingsBill2.getSmsCost());
  });

  it("should be able to set the call and sms cost", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setCallCost(2.75);
    settingsBill.setSmsCost(0.85);
    assert.equal(2.75, settingsBill.getCallCost());
    assert.equal(0.85, settingsBill.getSmsCost());

    let settingsBill2 = BillWithSettings();
    settingsBill2.setCallCost(1.75);
    settingsBill2.setSmsCost(0.65);
    assert.equal(1.75, settingsBill2.getCallCost());
    assert.equal(0.65, settingsBill2.getSmsCost());
  });

  it("should be able to set the warning level", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setWarningLevel(20);
    assert.equal(20, settingsBill.getWarningLevel());
  });
  it("should be able to set the critical level", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setCriticalLevel(30);
    assert.equal(30, settingsBill.getCriticalLevel());
  });

  it("should be able to set the warning and the critical level", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setWarningLevel(20);
    settingsBill.setCriticalLevel(30);
    assert.equal(20, settingsBill.getWarningLevel());
    assert.equal(30, settingsBill.getCriticalLevel());
  });
});


describe("Use Values", function () {
  it("should be able to use the call cost set", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setCriticalLevel(10);


    settingsBill.setCallCost(2.25);
    settingsBill.setSmsCost(0.85);

    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();

    assert.equal(6.75, settingsBill.getTotalCost());
    assert.equal(6.75, settingsBill.getTotaCalllCost());
    assert.equal(0.0, settingsBill.getTotalSmsCost());
  });

  it("should be able to use the call cost set for two calls at 1.35 each", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setCallCost(1.35);
    settingsBill.setSmsCost(0.85);
    settingsBill.setCriticalLevel(10);

    settingsBill.makeCall();
    settingsBill.makeCall();

    assert.equal(2.7, settingsBill.getTotalCost());
    assert.equal(2.7, settingsBill.getTotaCalllCost());
    assert.equal(0.0, settingsBill.getTotalSmsCost());
  });
  it("should be able to send two smses at 0.85 each", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setCallCost(1.35);
    settingsBill.setSmsCost(0.85);
    settingsBill.setCriticalLevel(10);


    settingsBill.sendSms();
    settingsBill.sendSms();

    assert.equal(1.7, settingsBill.getTotalCost());
    assert.equal(0.0, settingsBill.getTotaCalllCost());
    assert.equal(1.7, settingsBill.getTotalSmsCost());
  });
  it("should be able to send two smses at 0.85 each and make one call at 1.35", function () {
    let settingsBill = BillWithSettings();
    settingsBill.setCallCost(1.35);
    settingsBill.setSmsCost(0.85);
    settingsBill.setCriticalLevel(10)


    settingsBill.sendSms();
    settingsBill.sendSms();
    settingsBill.makeCall();

    assert.equal(3.05, settingsBill.getTotalCost());
    assert.equal(1.35, settingsBill.getTotaCalllCost());
    assert.equal(1.7, settingsBill.getTotalSmsCost());
  });
});

describe("Warning and Critical level", function () {

  it("Should return a class name if warning level is reached", function () {
    let settingsBill = BillWithSettings();

   
    settingsBill.setCallCost(1.35);
    settingsBill.setSmsCost(0.85);
    settingsBill.setWarningLevel(5);
    settingsBill.setCriticalLevel(10);

    settingsBill.sendSms();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    assert.equal("warning", settingsBill.totalClassName());
  });
  it("Should return a class name 'critical' if critical level is reached", function () {

    let settingsBill = BillWithSettings();

    
    settingsBill.setCallCost(2.50);
    settingsBill.setSmsCost(0.5);
    settingsBill.setWarningLevel(5);
    settingsBill.setCriticalLevel(10);

    settingsBill.sendSms();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
   // console.log(settingsBill.getTotalCost())
    
    assert.equal("danger", settingsBill.totalClassName());

  });

  it("Should stop the total call cost from increasing when the  critical level has been reached.", function () {
    let settingsBill = BillWithSettings();

   
    settingsBill.setCallCost(2);
    settingsBill.setSmsCost(0.5);
    settingsBill.setCriticalLevel(10);

    settingsBill.sendSms();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    assert.equal("danger", settingsBill.totalClassName());
    assert.equal(10, settingsBill.getTotaCalllCost());



  });
  it("Should allow the total to increase when the  critical level has been reached, then upping the critical level", function () {
    let settingsBill = BillWithSettings();

   
    settingsBill.setCallCost(2.);
   
    settingsBill.setCallCost(2.);
    settingsBill.setSmsCost(0.5);
    settingsBill.setWarningLevel(8);
    settingsBill.setCriticalLevel(10);

    settingsBill.sendSms();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    assert.equal("danger", settingsBill.totalClassName());
    assert.equal(10, settingsBill.getTotaCalllCost());

    settingsBill.setCriticalLevel(20);
    assert.equal("warning", settingsBill.totalClassName());
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    assert.equal(16, settingsBill.getTotaCalllCost());



  });

});
