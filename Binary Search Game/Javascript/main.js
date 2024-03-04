// Binary Search Game

const startButton = $("#start");
const higherButton = $("#higher");
const lowerButton = $("#lower");
const correctButton = $("#correct");
const message = $("#message");
const guess = $("#guess");
const minRange = 0;
const maxRange = 100;
let currentGuess = 50;
let guessCount = 0;
let guessCorrect = false;
let minGuess = 0;
let maxGuess = 100;

function addEventListeners() {
  startButton.click(Start);
  higherButton.click(Higher);
  lowerButton.click(Lower);
  correctButton.click(Correct);
}

function Higher() {
  guessCount++;
  minGuess = currentGuess;
  currentGuess = Math.floor((maxGuess + minGuess) / 2);
  message.text("Is your number " + currentGuess + "?");
}

function Lower() {
  guessCount++;
  maxGuess = currentGuess;
  currentGuess = Math.floor((maxGuess + minGuess) / 2);
  message.text("Is your number " + currentGuess + "?");
}

function showsAfterResult() {
  // Get any element with the style "showsAfterResult" and show it
  $(".showsAfterResult").show();
}

function Correct() {
  guessCorrect = true;
  message.text("I got it in " + guessCount + " guesses!");
  showsAfterResult();
}

function Start() {
  guessCount = 0;
  guessCorrect = false;
  minGuess = 0;
  maxGuess = 100;
  currentGuess = 50;
  message.text("Is your number " + currentGuess + "?");
  startButton.hide();
  higherButton.show();
  lowerButton.show();
  correctButton.show();
  guess.show();
}

function init() {
  addEventListeners();
  startButton.show();
  higherButton.hide();
  lowerButton.hide();
  correctButton.hide();
  guess.hide();
  message.text("Press Start to begin");
}

$(document).ready(function () {
  init();
});
