

// nested if else

/* 
    winning number 19

    19 your gues in right
    17 too low
    20 too high
*/

let winningNumber = 19;

let userGuess = +prompt("Give your Guess number: ");
// string to number convert after taking input:

if(userGuess === winningNumber)
{
    console.log("Your guess is right");
}
else
{
    console.log("Your guess is wrong")

    if(userGuess < winningNumber)
    {
        console.log("Your guess is too low");
    }
    else{
        console.log("Your guess is too hight");
    }

}