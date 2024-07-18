var count = 0;
var player1 = 0;
var player2 = 0;

var roll = (id) => {
    var dice = Math.floor(Math.random() * 6) + 1;
    if (id === "p1_dice") {
        player1 = dice;
        document.getElementById("p1_button").disabled = true;
    }
    else{
        player2 = dice;
        document.getElementById("p2_button").disabled = true;
    };

    switch (dice) {
        case 1:
            document.getElementById(id).src="Images/1.png";
            break;
        case 2:
            document.getElementById(id).src="Images/2.png";
            break;
        case 3:
            document.getElementById(id).src="Images/3.png";
            break;
        case 4:
            document.getElementById(id).src="Images/4.png";
            break;
        case 5:
            document.getElementById(id).src="Images/5.png";
            break;
        case 6:
            document.getElementById(id).src="Images/6.png";
            break;
        default:
            window.alert("Error");
            break;
    }
    count++;

    console.log("Player " + count);
    console.log("Dice Result is " + dice);
    console.log("player 1 is " + player1);
    console.log("player 2  is " + player2);
    
    if (count == 2) {
        checkWinner();
    }
}

var checkWinner = () => {
    if (player1 > player2) {
        document.getElementById("result").textContent = "Player 1 win";
        console.log("Player 1 win");
    }
    else if (player1 < player2) {
        document.getElementById("result").textContent = "Player 2 win";
        console.log("Player 2 win");
    }
    else {
        document.getElementById("result").textContent = "Draw";
        console.log("Draw");
    }
}

const reset = () => {
    location.reload();
}
