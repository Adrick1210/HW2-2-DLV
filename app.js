let money = 0;
let accountBal = [];

function teethCut() {
  if (money < 5) {
    accountBal.splice(0, 1, money += 1);
    alert(`You have earned ${money} cutting lawns today!`);
  } if (money === 5){
    alert(
      `You have earned ${money} to purchase a tool to make you more productive! Proceed to the store!`
    );
  }
}




