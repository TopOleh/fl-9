let play = confirm(`Do you want to play a game?`);

play ? guessingGame() : alert(`You did not become a millionaire, but can.`);

function randomNumb(max) {
  max++;//incremented for getting fixed range
  return Math.floor(Math.random() * Math.floor(max)); //random to fixed length
}

function guessingGame() {
  let min = 0;
  let max = 5;
  let compNumb = randomNumb(max);
  let userNumb;
  let attempts = 3;
  let lastAttempt = 1;
  let price = 0;
// start user price
  let basicPrice = 10;
// start win price
  let attemptPrice = 10;
// price that user can win now
  let gameMultiply = 1;
  let exit = false;
  let endGame = function () {
    alert(`Thank you for a game. Your prize is: ${price}`);
    confirm(`Do you want to play again?`) ? guessingGame() : exit = true; // if true start new game else exit
  };


  if (exit) { // exit from the function
        alert(`Thank you for a game. Your prize is: ${price}`);
        return false;
      }
  for (;attempts > 0; ) {
    userNumb = prompt(`Enter a number from ${min} to ${max} \nAttempts left: ${attempts}  
Total price: ${price}$ \nPossible price on current attempt: ${attemptPrice}$`);// get any user input

    if (userNumb === null || userNumb === ``) {
      return false;
    } else {
      userNumb = parseInt(userNumb.match(/\d+/g)[0]); // get a digit from string and parse it into int
    }

    if (compNumb === userNumb) {
      price += attemptPrice; // user pocket

      if (confirm(`Congratulation! Your prize is: ${price}. Do you want to continue?`)){
        attempts = 3; // renew the attempts
        max *= 2; // double the range
        gameMultiply *= attempts; // get a three times more multiply
        attemptPrice = basicPrice * gameMultiply ; //changed current price to three times bigger
        compNumb = randomNumb(max); // new comp numb
      }else {
        endGame();
        break;
      }
    } else {
      attemptPrice = Math.floor(attemptPrice/2); // two times smaller price per attempt
      attempts === lastAttempt ? endGame() : attempts--; // if it was last attempt end the game
    }
  }
}



