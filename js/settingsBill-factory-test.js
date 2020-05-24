describe("The update values button function", function () {
    it("should update the values of the SettingsWithFactory", function () {
        var PreSetCosts = SettingsFactoryFunction();
        var constants = {
            callSetting: "1.50",
            smsSetting: "0.50",
            warningSetting: "10.50",
            criticalSetting: "15.50"
        }
        assert.equal(true, PreSetCosts.updateValues(constants))
    });
    it("should update the values of the SettingsWithFactory", function () {
        var PreSetCosts = SettingsFactoryFunction();
        var constants = {
            callSetting: "kgs",
            smsSetting: "0.50",
            warningSetting: "10.50",
            criticalSetting: "15.50"
        }
        assert.equal(false, PreSetCosts.updateValues(constants))
    });
    it("should update the values of the SettingsWithFactory", function () {
        var PreSetCosts = SettingsFactoryFunction();
        var constants = {
            callSetting: ".25",
            smsSetting: "0.50",
            warningSetting: "10.50",
            criticalSetting: "15.50"
        }
        assert.equal(true, PreSetCosts.updateValues(constants))
    });
});

describe("The addFunction test", function () {
    it("should return true if call was clicked", function () {
        var PreSetCosts = SettingsFactoryFunction();
        var constants = {
            callSetting: "1.50",
            smsSetting: "0.50",
            warningSetting: "10.50",
            criticalSetting: "15.50"
        }
        PreSetCosts.updateValues(constants)
        assert.equal(true, PreSetCosts.addFunction("call"))
    });
    it("should return true if sms was clicked", function () {
        var PreSetCosts = SettingsFactoryFunction();
        var constants = {
            callSetting: "1.50",
            smsSetting: "0.50",
            warningSetting: "10.50",
            criticalSetting: "15.50"
        }
        PreSetCosts.updateValues(constants)
        assert.equal(true, PreSetCosts.addFunction("sms"))
    });
    it("should return false if not call or sms", function () {
        var PreSetCosts = SettingsFactoryFunction();
        var constants = {
            callSetting: "1.50",
            smsSetting: "0.50",
            warningSetting: "10.50",
            criticalSetting: "15.50"
        }
        PreSetCosts.updateValues(constants)
        assert.equal(false, PreSetCosts.addFunction("fruit"))
    });
});

describe("The settingsBillTotal function", function () {
    it("should return the correct totals when added up", function () {
        var myPresetTest = SettingsFactoryFunction()
        var newConstants = {
            callSetting: "2.75",
            smsSetting: "0.75",
            warningSetting: "30.00",
            criticalSetting: "50.00"
        }
        myPresetTest.updateValues(newConstants)
        myPresetTest.addFunction("call")
        var totals = myPresetTest.settingsBillTotals()
        assert.deepEqual({
            totalSettings: 2.75,
            callTotalSettings: 2.75,
            smsTotalSettings: 0.00
        }, totals)
    });
    it("should return the correct totals when added up", function () {
        var myPresetTest = SettingsFactoryFunction()
        var newConstants = {
            callSetting: "2.75",
            smsSetting: "0.75",
            warningSetting: "30.00",
            criticalSetting: "50.00"
        }
        myPresetTest.updateValues(newConstants)
        myPresetTest.addFunction("call")
        myPresetTest.addFunction("sms")
        myPresetTest.addFunction("call")
        myPresetTest.addFunction("sms")
        var totals = myPresetTest.settingsBillTotals()
        console.log(totals);
        
        assert.deepEqual({
            totalSettings: 6.40,
            callTotalSettings: 5.50,
            smsTotalSettings: 1.50
        }, totals)
    });
    it("should return the correct totals when added up", function () {
        var myPresetTest = SettingsFactoryFunction()
        var newConstants = {
            callSetting: "2.75",
            smsSetting: "0.75",
            warningSetting: "30.00",
            criticalSetting: "50.00"
        }
        myPresetTest.updateValues(newConstants)
        myPresetTest.addFunction("call")
        myPresetTest.addFunction("call")
        myPresetTest.addFunction("call")
        myPresetTest.addFunction("call")
        myPresetTest.addFunction("call")
        var totals = myPresetTest.settingsBillTotals()
        assert.deepEqual({
            totalSettings: 13.75,
            callTotalSettings: 13.75,
            smsTotalSettings: 0.00
        }, totals)
    });
});

describe("The getColorLive settings widget)", function () {
    it("should return black as color", function () {
        var PreSetCosts = SettingsFactoryFunction();
        var constants = {
            callSetting: "1.50",
            smsSetting: "0.50",
            warningSetting: "10.50",
            criticalSetting: "15.50"
        }
        PreSetCosts.updateValues(constants)
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        assert.equal("",PreSetCosts.getColorLive() )
    });
    it("should return red as color", function () {
        var PreSetCosts = SettingsFactoryFunction();
        var constants = {
            callSetting: "1.50",
            smsSetting: "0.50",
            warningSetting: "10.50",
            criticalSetting: "15.50"
        }
        PreSetCosts.updateValues(constants)
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        assert.equal("danger",PreSetCosts.getColorLive() )
    });
    it("should return orange as color", function () {
        var PreSetCosts = SettingsFactoryFunction();
        var constants = {
            callSetting: "1.50",
            smsSetting: "0.50",
            warningSetting: "10.50",
            criticalSetting: "15.50"
        }
        PreSetCosts.updateValues(constants)
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
        PreSetCosts.addFunction("call")
      
        assert.equal("warning",PreSetCosts.getColorLive() )
    });
});