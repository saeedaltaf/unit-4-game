$(document).ready(function () {
    //Global variables:

    //Generate random number everytime game starts
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    $("#randomnumbertext").text("Random Number: " + randomNumber);
    console.log(randomNumber);

    //Assign a random number to the colour images everytime the game starts:
    var blueNumber = Math.floor(Math.random() * 10);
    console.log("Blue Number: " + blueNumber);
    var yellowNumber = Math.floor(Math.random() * 5);
    console.log("Yellow Number: " + yellowNumber);
    var redNumber = Math.floor(Math.random() * 100);
    console.log("Red Number: " + redNumber);
    var greenNumber = Math.floor(Math.random() * 100);
    console.log("Green Number: " + greenNumber);

    //Create function to add random numbers from colours into "score"

    //Create function to determine wins/losses
    //if the score is greater than the random number, loss++
    //if the score equals random number, wins++






})


