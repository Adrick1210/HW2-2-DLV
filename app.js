let money = 0;
let accountBal = [];

let tools = [
  { type: "teeth", pay: 1 },
  { type: "Rusty Scissors", pay: 5 },
];

function teethCut() {
  if (money < 5) {
    accountBal.splice(0, 1, (money += 1));
    alert(`You have earned ${money} cutting lawns today!`);
  }
  if (money === 5) {
    alert(
      `You have earned ${money} to purchase a tool to make you more productive! Proceed to the store!`
    );
  }
}

let newTool = "";

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
