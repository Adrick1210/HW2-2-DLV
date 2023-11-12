// variables and objects
let tools = [
  { type: "teeth", pay: 1, cost: 0 },
  { type: "rusty scissors", pay: 5, cost: 5 },
  { type: "old push mower", pay: 50, cost: 25 },
  { type: "battery powered mower", pay: 100, cost: 250 },
  { type: "students", pay: 250, cost: 500 },
];

// user object
let user = {
  money: 0,
  currentTool: tools[0].type,
}

// Results function
function outcomeHandler(string) {
  let result = document.getElementById("result");
  result.textContent = string;
}

// Game Reset function
function reset() {
  money = 0;
  accountBal = [0];
  result = "";
  document.querySelector("#result").innerHTML = result;
}



//Game Functions:
// Game Implementation:

// test game function


// Cut with teeth function
// function teethCut() {
//   if (money < 5) {
//     accountBal.splice(0, 1, (money += 1));
//     outcomeHandler(`You have earned $${money} cutting lawns today!`);
//   }
//   if (money === 5) {
//     outcomeHandler(
//       `You have earned $${money} to purchase a tool to make you more productive! Proceed to the store!`
//     );
//   }
// }

// Cut with scissors function
// function scissCut() {
//   if (money < 25 && newTool === "rusty scissors") {
//     accountBal.splice(0, 1, (money += 5));
//     outcomeHandler(`You have earned $${money}! Keep up the good work!`);
//   } else if (newTool !== "rusty scissors") {
//     outcomeHandler("You don't have the tool! Get to chomping!");
//   } else if (money === 25) {
//     outcomeHandler(
//       `You have earned $${money}! Proceed to the store for a upgrade!`
//     );
//   }
// }

// Cut with old-push-mower
// function olPushMow() {
//   if (money < 250 && newTool === "old push mower") {
//     accountBal.splice(0, 1, (money += 50));
//     outcomeHandler(
//       `You have earned $${money} with the ${newTool}! Keep up the good work!`
//     );
//   } else if (newTool !== "old push mower") {
//     outcomeHandler("You don't have the tool! Keep on clipping!");
//   } else if (money === 250) {
//     outcomeHandler(
//       `You have earned $${money}! Proceed to the store for a upgrade!`
//     );
//   }
// }

// Cut with battery mower
// function battCut() {
//   if (money < 500 && newTool === "battery powered mower") {
//     accountBal.splice(0, 1, (money += 100));
//     outcomeHandler(`You have earned $${money}! Keep up the good work!`);
//   } else if (newTool !== "battery powered mower") {
//     outcomeHandler("You don't have the tool! Keep on pushing!");
//   } else if (money === 500) {
//     outcomeHandler(
//       `You have earned $${money}! Proceed to the store for a upgrade!`
//     );
//   }
// }

// Cut with team of students
// function teamCut() {
//   if (money < 1000 && newTool === "students") {
//     accountBal.splice(0, 1, (money += 250));
//     outcomeHandler(`You have earned $${money} cutting lawns today!`);
//   } else if (newTool !== "students") {
//     outcomeHandler(`You don't have a team of ${tools[4].type}, get back to work!`);
//   } else if (money === 1000) {
//     outcomeHandler(
//       `You have earned $${money} and won the game! Thanks for playing!`
//     );
//   }
// }

// Purchase Functions:

// Test purchase 

// Buy scissors function
// function buySciss() {
//   if (accountBal < 5) {
//     outcomeHandler(`You only have $${accountBal}, Get back to work!`);

//   } else if (accountBal >= 5) {
//     document.getElementById("scissors");
//     accountBal.splice(0, 1, (money -= 5));
//     newTool = tools[1].type;
//     outcomeHandler(
//       `You got the ${tools[1].type}! Now you can make more money!`
//     );

//   }
// }

// Buy old push-mower
// function buyOlMow() {
//   if (accountBal < 25) {
//     outcomeHandler(`You only have $${accountBal}, Get back to work!`);
//   } else if (accountBal >= 25) {
//     document.getElementById("ol-mow");
//     accountBal.splice(0, 1, (money -= 25));
//     newTool = tools[2].type;
//     outcomeHandler(
//       `You got the ${tools[2].type}! Now you can make more money!`
//     );
//   }
// }

// Buy battery mower
// function buyBatMow() {
//   if (accountBal < 250) {
//     outcomeHandler(`You only have $${accountBal}, Get back to work!`);
//   } else if (accountBal >= 25) {
//     document.getElementById("bat-mow");
//     accountBal.splice(0, 1, (money -= 250));
//     newTool = tools[3].type;
//     outcomeHandler(
//       `You got the ${tools[3].type}! Now you can make more money!`
//     );
//   }
// }

// Buy team of students
// function buyTeam() {
//   if (accountBal < 500) {
//     outcomeHandler(`You only have $${accountBal}, Get back to work!`);
//   } else if (accountBal <= 500) {
//     document.getElementById("students");
//     accountBal.splice(0, 1, (money -= 500));
//     newTool = tools[4].type;
//     outcomeHandler(
//       `You got a team of ${tools[4].type}! Now you can make more money!`
//     );
//   }
// }
