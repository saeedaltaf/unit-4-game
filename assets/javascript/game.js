$(document).ready(function () {
    //Global variables:

    var ourScore = 0;
    $("#scoretext").text("Your Score: " + ourScore);
    console.log("ourscorevariable: " + ourScore);

    //Generate random number everytime game starts
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    $("#randomnumbertext").text("Random Number: " + randomNumber);
    console.log("Random Number: " + randomNumber);

    //Assign a random number to the colour images everytime the game starts:
    var blueNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Blue Number: " + blueNumber);
    var yellowNumber = Math.floor(Math.random() * 5) + 1;
    console.log("Yellow Number: " + yellowNumber);
    var redNumber = Math.floor(Math.random() * 50) + 1;
    console.log("Red Number: " + redNumber);
    var greenNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Green Number: " + greenNumber);


    //On click, add the appropriate number to "ourScore":
 
    $("#blue").on("click", function () {
        var result =  parseInt(ourScore) + parseInt(blueNumber);
        $("#scoretext").text("Your Score: " + parseInt(ourScore) + parseInt(blueNumber));
    })
    $("#yellow").on("click", function () {
        // $("#scoretext").text("Your Score: " + yellowNumber);
    })
    $("#red").on("click", function () {
        // $("#scoretext").text("Your Score: " + redNumber);
    })
    $("#green").on("click", function () {
        // $("#scoretext").text("Your Score: " + greenNumber);
    })



    // }

    //Create function to determine wins/losses
    //if the score is greater than the random number, loss++
    //if the score equals random number, wins++


})


