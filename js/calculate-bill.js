var calcBill = CalculateBill()
//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringField = document.querySelector(".billString");
//get reference to bill total element 
const billTotalSpanElement = document.querySelector(".total")


//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

function calculateBtnClicked() {


    var billString = billStringField.value;

    var billItems = billString.split(",");
}
calculateBtn.addEventListener('click', calculateBtnClicked);

//link the function to a click event on the calculate button