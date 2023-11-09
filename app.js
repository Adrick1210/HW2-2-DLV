// variables and objects
let money = 0;
let accountBal = [];
let newTool = "";
let tools = [
  { type: "teeth", pay: 1 },
  { type: "Rusty Scissors", pay: 5 },
];
// cut with teeth function
function teethCut() {
  if (money < 5) {
    accountBal.splice(0, 1, (money += 1));
    console.log(`You have earned ${money} cutting lawns today!`)
    // alert(`You have earned ${money} cutting lawns today!`);
  }
  if (money === 5) {
    console.log(`You have earned ${money} to purchase a tool to make you more productive! Proceed to the store!`)
    // alert(
    //   `You have earned ${money} to purchase a tool to make you more productive! Proceed to the store!`
    // );
  }
}
// cut with scissors function
function scissCut() {
  if (money < 25) {
    accountBal.splice(0, 1, (money += 5));
    console.log((`You have earned ${money}! Keep up the good work!`))
    // alert(`You have earned ${money}! Keep up the good work!`);
  }
  if (money === 25) {
    console.log(`You have earned ${money}! Proceed to the store for a upgrade!`)
    // alert(`You have earned ${money}! Proceed to the store for a upgrade!`);
  }
}
// buy scissors function
function buySciss() {
  if (accountBal < 5) {
    alert(`You only have ${accountBal}, Get back to work!`);
  } else if (accountBal >= 5) {
    document.getElementById("scissors");
    accountBal.splice(0, 1, (money -= 5));
    newTool = tools[1].type;
    alert(`You got ${tools[1].type}! Now you can make more money!`);
  }
}
