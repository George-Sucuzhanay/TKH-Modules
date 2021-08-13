"use strict";

var rockImg = new Image();
rockImg.src = 'rock.png';
var paperImg = new Image();
paperImg.src = 'paper.png';
var scissorsImg = new Image();
scissorsImg.src = 'scissors.png';
var images = [rockImg, paperImg, scissorsImg];

function computerChoice() {
  var temp = Math.floor(Math.random() * 3 + 1);
  return temp;
} // console.log(computerChoice());


function checkResult(userChoice) {
  var compChoice = computerChoice(); //Win

  if (userChoice == 1 && compChoice == 3 || userChoice == 2 && compChoice == 1 || userChoice == 3 && compChoice == 2) {
    $(".result").text("You Win!");
  } //Lose
  else if (userChoice == 1 && compChoice == 2 || userChoice == 2 && compChoice == 3 || userChoice == 3 && compChoice == 1) {
      $(".result").text("You Lose!");
    } //Tie
    else {
        $(".result").text("Tie!");
      }

  console.log(userChoice, compChoice);
  displayChoices(userChoice, compChoice);
}

function displayChoices(userChoice, computerChoice) {
  // update the HTML with the image from the user's choice
  $('#playerChoice').attr('src', images[userChoice - 1].src); // update the HTML with the image from the computer's choice

  $('#computerChoice').attr('src', images[computerChoice - 1].src);
}