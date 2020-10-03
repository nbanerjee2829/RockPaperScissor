var userScore = 0;
var compScore = 0;
//caching the dom
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choice = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choice[randomNumber];
}

function convertToWord(input) {
  if (input == "r") return "Rock";
  if (input == "p") return "Paper";
  return "Scissors";
}

function win(user_Choice, comp_Choice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(user_Choice)} beats ${convertToWord(
    comp_Choice
  )} . You Win!!`;
  document.getElementById(user_Choice).classList.add("choice-win");
  setTimeout(function() {
    document.getElementById(user_Choice).classList.remove("choice-win");
  }, 300);
}

function lose(user_Choice, comp_Choice) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(user_Choice)} beats ${convertToWord(
    comp_Choice
  )} . You Lose!!`;
  document.getElementById(user_Choice).classList.add("choice-lose");
  setTimeout(function() {
    document.getElementById(user_Choice).classList.remove("choice-lose");
  }, 300);
}

function draw(user_Choice, comp_Choice) {
  result_p.innerHTML = `${convertToWord(user_Choice)} equals ${convertToWord(
    comp_Choice
  )} . It's a draw!!`;
  document.getElementById(user_Choice).classList.add("choice-draw");
  setTimeout(function() {
    document.getElementById(user_Choice).classList.remove("choice-draw");
  }, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissors_div.addEventListener("click", function() {
    game("s");
  });
}

main();
