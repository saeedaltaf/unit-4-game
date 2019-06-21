$(document).ready(function () {
    //Global variables:
    var ourScore = 0;

    //Defining wins and losses variable:
    var wins = 0;
    $("#winstext").text("Wins: " + wins);
    // $("#winstext").text("Wins: " + wins);
    var loss = 0;
    $("#losstext").text("Losses: " + loss);


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

    //Reset Game function:
    function reset() {
        ourScore = 0;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        $("#randomnumbertext").text("Random Number: " + randomNumber);
        console.log("Random Number: " + randomNumber);
        blueNumber = Math.floor(Math.random() * 10) + 1;
        console.log("Blue Number: " + blueNumber);
        yellowNumber = Math.floor(Math.random() * 5) + 1;
        console.log("Yellow Number: " + yellowNumber);
        redNumber = Math.floor(Math.random() * 50) + 1;
        console.log("Red Number: " + redNumber);
        greenNumber = Math.floor(Math.random() * 100) + 1;
        console.log("Green Number: " + greenNumber);
        $("#scoretext").text("Your score: " + ourScore);

    }
    //Wins function:
    function winFunction() {
        alert("You won!");
        wins++;
        $("#winstext").text("Wins: " + wins);
        reset();
    }
    //Loss function:
    function lossFunction() {
        alert("You lost!");
        loss++;
        $("#losstext").text("Losses: " + loss);
        reset();
    }

    //Just to keep track of the score:
    console.log("ourscorevariable: " + ourScore);

    //On click, add the appropriate number to "ourScore":
    $("#blue").on("click", function () {
        ourScore = blueNumber + ourScore;
        $("#scoretext").text(" Your Score: " + ourScore);
        if (ourScore === randomNumber) {
            winFunction();
        } else if (ourScore > randomNumber) {
            lossFunction();
        }
        //Just to keep track of the score:
        console.log("ourscorevariable: " + ourScore);
    });
    $("#yellow").on("click", function () {
        ourScore = yellowNumber + ourScore;
        $("#scoretext").text(" Your Score: " + ourScore);
        if (ourScore === randomNumber) {
            winFunction();
        } else if (ourScore > randomNumber) {
            lossFunction();
        }
        //Just to keep track of the score:
        console.log("ourscorevariable: " + ourScore);
    });
    $("#red").on("click", function () {
        ourScore = redNumber + ourScore;
        $("#scoretext").text(" Your Score: " + ourScore);
        if (ourScore === randomNumber) {
            winFunction();
        } else if (ourScore > randomNumber) {
            lossFunction();
        }
        //Just to keep track of the score:
        console.log("ourscorevariable: " + ourScore);
    });
    $("#green").on("click", function () {
        ourScore = greenNumber + ourScore;
        $("#scoretext").text(" Your Score: " + ourScore);
        if (ourScore === randomNumber) {
            winFunction();
        } else if (ourScore > randomNumber) {
            lossFunction();
        }
        //Just to keep track of the score:
        console.log("ourscorevariable: " + ourScore);
    });

});


