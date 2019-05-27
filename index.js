//inicialize variables with dom elements 
let images1 = document.querySelector(".img1");
let images2 = document.querySelector(".img2");
let header1 = document.querySelector(".container h1");

//random numbers for 2 dice in the game
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

//binding the random numbers with the images of dice
let diceString1 = "./images/dice" + randomNumber1 + ".png";
let diceString2 = "./images/dice" + randomNumber2 + ".png";

images1.setAttribute("src", diceString1);
images2.setAttribute("src", diceString2);

// change h1 to player wins or draw 

if (randomNumber1 > randomNumber2) {
  header1.textContent = "Player 1 Wins!";
}else if (randomNumber1 === randomNumber2) {
  header1.textContent = "Draw!";
}
else {
  header1.textContent = "Player 2 Wins!";
}