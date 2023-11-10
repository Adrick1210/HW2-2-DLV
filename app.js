// variables and objects
let money = 0;
let accountBal = [0];
let newTool = "";
let tools = [
  { type: "teeth" },
  { type: "rusty scissors" },
  { type: "old push-mower" },
];

// cut with teeth function
function teethCut() {
  if (money < 5) {
    accountBal.splice(0, 1, (money += 1));
    console.log(`You have earned ${money} cutting lawns today!`);
    // alert(`You have earned ${money} cutting lawns today!`);
  }
  if (money === 5) {
    console.log(
      `You have earned ${money} to purchase a tool to make you more productive! Proceed to the store!`
    );
    // alert(
    //   `You have earned ${money} to purchase a tool to make you more productive! Proceed to the store!`
    // );
  }
}
// cut with scissors function
function scissCut() {
  if (money < 25 && newTool === "rusty scissors") {
    accountBal.splice(0, 1, (money += 5));
    console.log(`You have earned ${money}! Keep up the good work!`);
    // alert(`You have earned ${money}! Keep up the good work!`);
  } else if (newTool !== "rusty scissors") {
    console.log("You don't have the tool! Get to chomping!");
    // alert("You don't have enough!")
  } else if (money === 25) {
    console.log(
      `You have earned ${money}! Proceed to the store for a upgrade!`
      // alert(`You have earned ${money}! Proceed to the store for a upgrade!`);
    );
  }
}
// buy scissors function
function buySciss() {
  if (accountBal < 5) {
    console.log(`You only have ${accountBal}, Get back to work!`);
    // alert(`You only have ${accountBal}, Get back to work!`);
  } else if (accountBal >= 5) {
    document.getElementById("scissors");
    accountBal.splice(0, 1, (money -= 5));
    newTool = tools[1].type;
    console.log(`You got the ${tools[1].type}! Now you can make more money!`);
    // alert(`You got ${tools[1].type}! Now you can make more money!`);
  }
}
// old-mower
function buyOlMow() {
  if (accountBal < 25) {
    console.log(`You only have ${accountBal}, Get back to work!`);
    // alert(`You only have ${accountBal}, Get back to work!`);
  } else if (accountBal >= 25) {
    document.getElementById("ol-mow");
    accountBal.splice(0, 1, (money -= 25));
    newTool = tools[2].type;
    console.log(`You got the ${tools[2].type}! Now you can make more money!`);
    // alert(`You got ${tools[2].type}! Now you can make more money!`);
  }
}
