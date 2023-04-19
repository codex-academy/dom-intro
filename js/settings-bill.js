
const totalSettings  = document.querySelector(".totalSettings");
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
// get a reference to the sms or call radio buttons
const callTotalSettings = document.querySelector(".callTotalSettings");
const smsTotalSettings = document.querySelector(".smsTotalSettings");
// get refences to all the settings fields
const callCost = document.querySelector(".callCostSetting");
const smsCost = document.querySelector(".smsCostSetting");
const warningLevel =document.querySelector(".warningLevelSetting");
const criticalLevel =document.querySelector(".criticalLevelSetting");
//get a reference to the add button
const addButton = document.querySelector(".button-primary");

//get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector(".updateSettings");


// create a variables that will keep track of all the settings
var callCostSetting = 0;
var smsCostSetting = 0;
var warningLevelSetting = 0;
var criticalLevelSetting = 0;

updateSettingsBtn.addEventListener("click", billSettings);

function billSettings(){
    var billChecked = document.querySelector("input[name='billItem']:checked")

    
    callCostSetting = callCost.value;
    smsCostSetting = smsCost.value;
    warningLevelSetting = warningLevel.value;
    criticalLevelSetting = criticalLevel.value;

}
    


    console.log(callCost.value, smsCost.value, warningLevel.value, criticalLevel.value)

// create a variables that will keep track of all three totals.
var callTotal = 0;
var smsTotal = 0;
var total = callTotal + smsTotal;


//add an event listener for when the 'Update settings' button is pressed
//updateSettingsBtn.addEventListener("click",billSettings)
//add an event listener for when the add button is pressed
addButton.addEventListener("click",billType);




function billType(){

    var clickedBtn = document.querySelector("input[name='billItem']:checked");

    if (clickedBtn){
        var billItem = clickedBtn.value

    //  if(billItem = "call"){
    //     callTotal += 2.75
    // }
    // else if(billItem = "sms"){
    //     smsTotal += 0.75
    // }

    }
    callTotalSettings.innerHTML = callTotal.toFixed(2);
    smsTotalSettings.innerHTML = smsTotal.toFixed(2);
  
   totalSettings.innerHTML = total.toFixed(2);
}

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
