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

Ideas to develop
- Manage your parents and children's expenses
- Add revenue input for revenue - spending view per month given...
- Specific objectives in life met thanks to best-in-class budget mgt

*/



// Ask user about food budget
var vBudget = document.getElementById("inputBudget").value;


// Button to launch budg mgt
document.getElementById("btnCommander").addEventListener("click", dailySpend);
// bien réinitialiser à 0 après avoir passé chaque commande, cf fuction below



/* Food daily spend */
function dailySpend() {
  reinitFormu();
  var jour = 0;
  // Affiche le budget
  document.getElementById("hBudget").innerHTML = vBudget;
  while (vBudget > 0) {
    jour++;
    var Spentdaily = calculateDailyspend();

    //if (nbrSandwiches < 1) {
    //    nbrSandwiches = 1000;
    //}

    if (vBudget >= Spentdaily) {
      vBudget = vBudget - Spentdaily;
      document.getElementById("hTicket").innerHTML += "<p>On day " + jour + ", you spent exactly " + Spentdaily + "€. You still have " + vBudget + "€ to go.</p>";

      if (jour == 5) {
        document.getElementById("hTicket").innerHTML += "<p><em>Yes dude, you made it after 5 days. Congrats and keep on.</em></p>";
       }

    } else {
      document.getElementById("hTicket").innerHTML += "<p>Today, you spent " + Spentdaily + "€. You're broke now. Learn from your mistakes and ask a friend to help you buy your stuff.</p>";
      vBudget = 0;
    }
  }
  document.getElementById("hTicket").innerHTML += "<p>Finally, you made it for " + jour + " days this month.</p>";
}

/* Random daily spend calculation */
function calculateDailyspend() {
    var spend = (Math.random() * (1) + 10).toFixed(0);
    return spend;
}

/* Set to initial value after click on button */
function reinitFormu() {
    vBudget = document.getElementById("inputBudget").value;
    document.getElementById("hTicket").innerHTML = "";

}
