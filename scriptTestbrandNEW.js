// Beta project: follow your expenses of Month N on food category, given a fixed budget


//*** Monthly spend in food ***
//we got a given monthly budget
//food costs x
//tells us our daily spent
//want to know what remains by EOD
//tells us how many days we met budget expectations
//budget gone at the end > make the loop stop by putting budget = 0;

/*
// var Budget;        // monthly budget input by user
// var AvgPrice;      // random figure
// var Volume;        // volume purchased input by user
// var Remaining;     // remaning budget for the month after day i
// var Success;       // number of days meeting budget's constraints


// Output - to be displayed
// Ask user monthly budget for food
// random daily spend in food
// after each day, how it spent and remaining budget

More advanced
- Per category: food, housing, leisure, energy, TV.Internet
- after each week, are you gonna reach this monthly objective moving forward
- better display
- Suggest budget split given revenue data and other
- in-month Re adapt budget given current spending/ remaining moneyé and fixed budget

Category
- list of all categories
- add if needed
- assign given budget

Next actions on Category >>
- mettre menu déroulant avec top categories
- renommer variables de budget et de daily spend en rajoutant suffice Foo, Hou, Edu etc
- var Other qui inclut d'autres cat
- créer variable overall qui sera la sommme des Budg par cat.
- Have weekly view instead of daily view

Ideas to develop
- Manage your parents and children's expenses
- Add revenue input for revenue - spending view per month given...
- Specific objectives in life met thanks to best-in-class budget mgt

*/

// Ask user about budget per category

    vBudgetHousingini = document.getElementById("inputBudgetHousing").value;
    vBudgetFoodini = document.getElementById("inputBudgetFood").value;
    vBudgetClothingini = document.getElementById("inputBudgetClothing").value;
    vBudgetTransportini = document.getElementById("inputBudgetTransport").value;

    vBudgetHousing = vBudgetHousingini;
    vBudgetFood = vBudgetFoodini;
    vBudgetClothing = vBudgetClothingini;
    vBudgetTransport = vBudgetTransportini;


// Button to launch budg mgt
document.getElementById("btnCommander").addEventListener("click", weeklySpend);
// bien réinitialiser à 0 après avoir passé chaque commande, cf fuction below



/* Food daily spend */
function weeklySpend() {
  reinitFormu();
  var week = 0;
  // Affiche le budget
  //document.getElementById("hBudget").innerHTML = vBudget;

// *** FOOD ***

  while (vBudgetFood > 0) {

    week++;
    var SpentweeklyFood = calculateWeeklyspend();
    var diffFood = SpentweeklyFood - vBudgetFoodini * (1/4);

    //if (nbrSandwiches < 1) {
    //    nbrSandwiches = 1000;
    //}

    if (vBudgetFood >= SpentweeklyFood) {

      vBudgetFood = vBudgetFood - SpentweeklyFood;
      document.getElementById("hTicketFood").innerHTML += "<p>On week " + week + ", you spent exactly " + SpentweeklyFood + "€. You still have " + vBudgetFood + "€ to go by EOM.</p>";
// TO DO change hTML destination of hticket

        if (SpentweeklyFood >= vBudgetFoodini * (1/4)) {
        document.getElementById("hTicketFood").innerHTML += "Careful ! You are spending more than expected at the end of week " + week + " (" + diffFood + "€). ";

        } else {
        document.getElementById("hTicketFood").innerHTML += "Looks great ! You are on track to meet your monthly objectives at the end of week " + week;
        }

      /*
      if (jour == 5) {
        document.getElementById("hTicket").innerHTML += "<p><em>Yes dude, you made it after 5 days. Congrats and keep on.</em></p>";
       }
*/
    } else {
      document.getElementById("hTicketFood").innerHTML += "<p>At the end of week " + week +" , you spent " + SpentweeklyFood + "€. You're off budget now. Learn from your mistakes and ask a friend to help you buy your stuff.</p>";
      vBudgetFood = 0;
    }
  }
  document.getElementById("hTicketFood").innerHTML += "<p>Finally, you made it for " + week + " weeks this month.</p>";
 // end of function's }

//TRANSPORT

  while (vBudgetTransport > 0) {

    week++;
    var SpentweeklyTransport = calculateWeeklyspend();
    var diffTransport = SpentweeklyTransport - vBudgetTransportini * (1/4);

    //if (nbrSandwiches < 1) {
    //    nbrSandwiches = 1000;
    //}

    if (vBudgetTransport >= SpentweeklyTransport) {
      vBudgetTransport = vBudgetTransport - SpentweeklyTransport;
      document.getElementById("hTicketTransport").innerHTML += "<p>On week " + week + ", you spent exactly " + SpentweeklyTransport + "€. You still have " + vBudgetTransport + "€ to go by EOM.</p>";
// TO DO change hTML destination of hticket

            if (SpentweeklyTransport >= vBudgetTransportini*(1/4)) {
            document.getElementById("hTicketTransport").innerHTML += "Careful ! You are spending more than expected at the end of week " + week + " (" + diffTransport + "€). ";

            } else {
            document.getElementById("hTicketTransport").innerHTML += "Looks great ! You are on track to meet your monthly objectives at the end of week " + week;
            }

      //if (jour == 5) {
      //  document.getElementById("hTicket").innerHTML += "<p><em>Yes dude, you made it after 5 days. Congrats and keep on.</em></p>";
      // }

    } else {
      document.getElementById("hTicketTransport").innerHTML += "<p>At the end of week " + week + " , you spent " + SpentweeklyTransport + "€. You're off budget now. Learn from your mistakes and ask a friend to help you buy your stuff.</p>";
      vBudgetTransport = 0;
    }
  }
  document.getElementById("hTicketTransport").innerHTML += "<p>Finally, you made it for " + week + " weeks this month.</p>";
}




/* Random daily spend calculation
function calculateWeeklyspend() {
    var spend = (Math.random() * (1) + 100).toFixed(0);
    return spend;
}
*/
function calculateWeeklyspend() {
  return Math.random() * 10 + 200;
}

/* Set to initial value after click on button */
function reinitFormu() {
    vBudgetHousing = document.getElementById("inputBudgetHousing").value;
    vBudgetFood = document.getElementById("inputBudgetFood").value;
    vBudgetClothing = document.getElementById("inputBudgetClothing").value;
    vBudgetTransport = document.getElementById("inputBudgetTransport").value;

    document.getElementById("hTicketFood").innerHTML = "";
    document.getElementById("hTicketTransport").innerHTML = "";
    //document.getElementById("hTicketHousing").innerHTML = "";
    //document.getElementById("hTicketClothing").innerHTML = "";

}
