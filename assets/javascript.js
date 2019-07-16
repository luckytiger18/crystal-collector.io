//initial start of the game will generate a random target number. 
function initial() {
    var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#targetScore").text(randomNum);
    crystalGenerator()
}

//Each crystal will have a random number and assigning them to each crystal
function crystalGenerator(){
    for (var i= 0; i < 4; i++){
        var crystalNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        
        var crystalName = "#crystal" + i;
    
        $(crystalName).attr("data-value", crystalNum); //setting the value. without the comma is getting the value.
    }
}
//comparing currentScore with targetScore
function checkGameStatus() {
    var currentScore = $("#currentScore").text()
    currentScore = parseInt(currentScore);
    var targetScore = $("#targetScore").text()
    targetScore = parseInt(targetScore);

    if (currentScore == targetScore) {
        var winnerNum = $("#wins").text()
        winnerNum = parseInt(winnerNum);
        winnerNum++;
        $("#wins").text(winnerNum);
        reset();
    }else if (currentScore > targetScore) {
        var lossesNum = $("#losses").text()
        lossesNum = parseInt(lossesNum);
        lossesNum++;
        $("#losses").text(lossesNum);
        reset();
    }
}
//resetting the game to zero
function reset(){
    $("#currentScore").text(0);
    initial();
}
//onclick function and clicking of the crystals to add the numbers
$("p").on("click", function() {
    var count = $("#currentScore").text()
    count = parseInt(count);
    count += parseInt($(this).attr("data-value"));
    $("#currentScore").text(count);
    checkGameStatus()
})

initial()





