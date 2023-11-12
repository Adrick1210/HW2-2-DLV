// variables and objects
let money = 0;
let accountBal = [0];
let newTool = "";
let tools = [
  { type: "teeth" },
  { type: "rusty scissors" },
  { type: "old push mower" },
  { type: "battery powered mower" },
];

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
// function landGame() {
//   for (let i = 0; i < 10; i++){
//     if (money < 5) {
//       accountBal.splice(0, 1, (money += 1));
//       outcomeHandler(`You have earned $${money} cutting lawns today!`)
//     }
//     if (money === 5) {
//       outcomeHandler(
//         `You have earned $${money} to purchase a tool to make you more productive! Proceed to the store!`
//       );
//     }

//   }
// }

// cut with teeth function
function teethCut() {
  if (money < 5) {
    accountBal.splice(0, 1, (money += 1));
    outcomeHandler(`You have earned $${money} cutting lawns today!`);
  }
  if (money === 5) {
    outcomeHandler(
      `You have earned $${money} to purchase a tool to make you more productive! Proceed to the store!`
    );
  }
}

// cut with scissors function
function scissCut() {
  if (money < 25 && newTool === "rusty scissors") {
    accountBal.splice(0, 1, (money += 5));
    outcomeHandler(
      `You have earned $${money} with the ${newTool}! Keep up the good work!`
    );
  } else if (newTool !== "rusty scissors") {
    outcomeHandler("You don't have the tool! Get to chomping!");
  } else if (money === 25) {
    outcomeHandler(
      `You have earned $${money}! Proceed to the store for a upgrade!`
    );
  }
}

// cut with old-push-mower
function olPushMow() {
  if (money < 250 && newTool === "old push mower") {
    accountBal.splice(0, 1, (money += 50));
    outcomeHandler(
      `You have earned $${money} with the ${newTool}! Keep up the good work!`
    );
  } else if (newTool !== "old push mower") {
    outcomeHandler("You don't have the tool! Keep on clipping!");
  } else if (money === 250) {
    outcomeHandler(
      `You have earned $${money}! Proceed to the store for a upgrade!`
    );
  }
}

//cut with battery mower
function battCut() {
  if (money < 500 && newTool === "battery powered mower") {
    accountBal.splice(0, 1, (money += 100));
    outcomeHandler(
      `You have earned $${money} with the ${newTool}! Keep up the good work!`
    );
  } else if (newTool !== "battery powered mower") {
    outcomeHandler("You don't have the tool! Keep on pushing!");
  } else if (money === 500) {
    outcomeHandler(
      `You have earned $${money}! Proceed to the store for a upgrade!`
    );
  }
}
// Purchase Functions:

//buy scissors function
function buySciss() {
  if (accountBal < 5) {
    outcomeHandler(`You only have $${accountBal}, Get back to work!`);
    // alert(`You only have ${accountBal}, Get back to work!`);
  } else if (accountBal >= 5) {
    document.getElementById("scissors");
    accountBal.splice(0, 1, (money -= 5));
    newTool = tools[1].type;
    outcomeHandler(
      `You got the ${tools[1].type}! Now you can make more money!`
    );
    // alert(`You got ${tools[1].type}! Now you can make more money!`);
  }
}

// buy old push-mower
function buyOlMow() {
  if (accountBal < 25) {
    outcomeHandler(`You only have $${accountBal}, Get back to work!`);
  } else if (accountBal >= 25) {
    document.getElementById("ol-mow");
    accountBal.splice(0, 1, (money -= 25));
    newTool = tools[2].type;
    outcomeHandler(
      `You got the ${tools[2].type}! Now you can make more money!`
    );
  }
}

//buy battery mower
function buyBatMow() {
  if (accountBal < 250) {
    outcomeHandler(`You only have $${accountBal}, Get back to work!`);
  } else if (accountBal >= 25) {
    document.getElementById("bat-mow");
    accountBal.splice(0, 1, (money -= 250));
    newTool = tools[3].type;
    outcomeHandler(
      `You got the ${tools[3].type}! Now you can make more money!`
    );
  }
}
