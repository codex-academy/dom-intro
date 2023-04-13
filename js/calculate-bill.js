//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate 

const myButton = document.querySelector(".calculateBtn");

const myTotal = document.querySelector(".billTotal");

const myText = document.querySelector(".billString");

function totalPhoneBill(billList){
    const currentList = billList.split(",")
    
     var total = 0;
  
    for (var i=0;i<currentList.length;i++){
     var bill = currentList[i].trim();
   
      if (bill.startsWith("sms")){
    total += 500.65;
   }
     else if (bill.startsWith("call")){
    total += 2.75;
  }
    }
    return total.toFixed(2) ;
  }

  function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = myText.value;   
    //round to two decimals
    var roundedBillTotal = totalPhoneBill(billString);
    myTotal.innerHTML = roundedBillTotal;
}

myButton.addEventListener("click", calculateBtnClicked);