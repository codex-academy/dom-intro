//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn")
function calculateBtnClicked(){

    // get the string entered in the textArea
    var billString = billStringElement.value.toLowerCase();
    //split the string
    var billItems = billString.split(",");
    
    //split the string
   
    // a variable for the total phone bill.
       var billTotal = 0;
    
    //loop over all the bill items

    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
          billTotal += 0.75;
        }
    
    
    //round to two decimals

    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
    billTotalElement.classList.remove("danger")
billTotalElement.classList.remove("warning")

}

if(billTotal > 30 ){
    billTotalElement.classList.add("danger")
}
   
else if(billTotal > 20 ){
    billTotalElement.classList.add("warning")
}

}


calculateBtn.addEventListener('click', calculateBtnClicked);



//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal")

//get a reference to the billString
const billStringElement = document.querySelector(".billString");


//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
