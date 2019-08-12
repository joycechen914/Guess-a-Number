//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check guess
if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT!!");
}
//otherwise, check if higher
else if (guess > secretNumber) {
    alert("Too high, guess again");
}
else {
    alert("Too low, guess again");
}