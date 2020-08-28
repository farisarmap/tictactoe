function startGame() {

    for (let i = 1; i <= 9; i++) {
        clearBox(i);
    }

    document.turn = "X";
    document.winner = null;
    setMessage(`${document.turn} First`)
}

function setMessage(letter) {
    document.getElementById("message").innerText = letter;
}

function nextMove(square) {
    if (document.winner != null) {
        setMessage(`${document.turn} Already Won`)
        setMessage("Click Start Over To Play Again")
    } else if (square.innerText == '') {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setMessage("pick another square.")
    }
}

function switchTurn() {
    if (checkForWinner(document.turn)) {
        setMessage(`Congtrats ${document.turn} Win the Game`)
        document.winner = document.turn;
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage(`it's ${document.turn}'s turn.`)
    } else {
        document.turn = "X";
        setMessage(`it's ${document.turn}'s turn.`)
    }
}

//ngecek baris
function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}

function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
}

//ngecek pemenang
function checkForWinner(move) {
    let result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) 
        {
        result = true;
    }
    return result;
}

