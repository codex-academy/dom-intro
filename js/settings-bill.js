const callCost = document.querySelector(".callCostSetting");
const smsCost = document.querySelector(".smsCostSetting");
const warningLevel = document.querySelector(".warningLevelSetting");
const criticalLevel = document.querySelector(".criticalLevelSetting");

const totalSettings = document.querySelector(".totalSettings");
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");

// create a variables that will keep track of all three totals.
var callTotal = 0;
var smsTotal = 0;
var total = 0;
var callCostSetting = 0;
var smsCostSetting = 0;
var warningLevelSetting = 0;
var criticalLevelSetting = 0;

function updateBillSettings() {
  callCostSetting = callCost.value;
  smsCostSetting = smsCost.value;
  warningLevelSetting = warningLevel.value;
  criticalLevelSetting = criticalLevel.value;
  setColor()
  
}

const updateSettingsBtn = document.querySelector(".updateSettings");
updateSettingsBtn.addEventListener("click", updateBillSettings);

function addSettingsBtn() {
  const billItemType = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked"
  );

  if (billItemType) {
    var billItem = billItemType.value;

    if (billItem == "call") {
      callTotal += Number(callCostSetting);
    }
    if (billItem == "sms") {
      smsTotal += Number(smsCostSetting);
      //console.log(smsTotal);
    }
  }
  callTotalSettings.innerHTML = callTotal.toFixed(2);
  smsTotalSettings.innerHTML = smsTotal.toFixed(2);
  total = callTotal + smsTotal;

  setColor()
 

}


function setColor(){
  totalSettings.innerHTML = total.toFixed(2);
  totalSettings.classList.remove('danger')
  totalSettings.classList.remove('warning')
  if (total >= criticalLevelSetting) {
    totalSettings.classList.add("danger");
  } else if (total >= warningLevelSetting) {
    totalSettings.classList.add("warning");
  }
}

const addButton = document.querySelector(".add-setting-btn");
addButton.addEventListener("click", addSettingsBtn);

//add an event listener for when the 'Update settings' button is pressed
//updateSettingsBtn.addEventListener("click",billSettings)
//add an event listener for when the add button is pressed
///addButton.addEventListener("click",billType);

// create a variables that will keep track of all the settings

//get a reference to the add button

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
