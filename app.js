// variables and objects
const tools = [
  { type: " teeth", pay: 1, cost: 0 },
  { type: "rusty scissors", pay: 5, cost: 5 },
  { type: "a old push mower", pay: 50, cost: 25 },
  { type: "a new battery mower", pay: 100, cost: 250 },
  { type: "a team of starving students", pay: 250, cost: 500 },
];

const landscape = {
  money: 0,
  tool: 0,
  wonGame: false,
};

// Results print to page
function outcomeHandler(string) {
  let result = document.getElementById("result");
  result.textContent = string;
}

// Reset button
const reset = () => {
  landscape.money = 0;
  landscape.tool = 0;
  result = "";
  document.querySelector("#result").innerHTML = result;
};

// Game function
function gameStart() {
  const tool = tools[landscape.tool];
  landscape.money += tool.pay;
  outcomeHandler(`You made $${landscape.money} using ${tool.type}!`);
  winGame();
}

// Upgrade the tool
function newTool() {
  if (landscape.tool + 1 < tools.length) {
    const upgrade = tools[landscape.tool + 1];
    if (upgrade.cost <= landscape.money) {
      landscape.money -= upgrade.cost;
      landscape.tool += 1;
      outcomeHandler(
        `You have upgraded to ${upgrade.type}! Now you can make more money!`
      );
    } else {
      outcomeHandler("Cannot upgrade tool yet! Not enough money!");
    }
  } else {
    outcomeHandler(`No more upgrades`);
  }
}

// Win conditions for game
function winGame() {
  if (landscape.tool === tools.length - 1 && landscape.money >= 1000) {
    outcomeHandler(`You have won the game!`);
    landscape.wonGame = true;
  }
}
