let secretNumber = Math.trunc(Math.random() * 21);
console.log(secretNumber);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const input = Number(document.querySelector(".guess").value);
  if (!input) {
    // document.querySelector(".message").textContent = "⛔️No Number!";
    displayMessage("⛔️No Number!");
  }
  // when score = secretNumber
  else if (input === secretNumber) {
    document.querySelector(".message").textContent = "correct!✅";
    let guessNumber = (document.querySelector(".number").textContent =
      secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.fontSize = "8rem";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".scoree").textContent = highScore;
    }
  }
  //when score is too low
  else if (input < secretNumber) {
    if (score > 0) {
      // document.querySelector(".message").textContent = "📉Too  low!...";
      displayMessage("📉Too  low!...");
      document.querySelector(".score").textContent = score;
      score--;
    } else {
      // document.querySelector(".message").textContent = "You lost the game🤦‍♂️";
      displayMessage("You lost the game🤦‍♂️");
      document.querySelector(".score").textContent = 0;
    }
  }
  //when score is too high
  else if (input > secretNumber) {
    if (score > 0) {
      // document.querySelector(".message").textContent = "📈Too High...";
      displayMessage("📈Too High...");
      document.querySelector(".score").textContent = score;

      score--;
    } else {
      // document.querySelector(".message").textContent = "You lost the game🤦‍♂️";
      displayMessage("You lost the game🤦‍♂️");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  Number((document.querySelector(".guess").value = ""));
  document.querySelector(".message").textContent = "start Guessing";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.fontSize = "6rem";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = 20;
  secretNumber = Math.trunc(Math.random() * 21);
});
