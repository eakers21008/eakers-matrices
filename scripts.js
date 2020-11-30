var gameBoard = [
    [null, null, null, "S", null],
    [null, "S", null, "S", null],
    ["S", null, null, null, null],
    [null, "S", null, null, null],
    [null, null, null, null, "S"]
]
;


// row and column is gameBoard[i][j];
for(var i = 0; i < gameBoard.length; i++){
    var row = getRandomNum();
    var column = getRandomNum();
    var randomSquare = gameBoard[row][column];

    for(var j = 0; j < gameBoard.length; j++){
        var column = row[j];
        if(column ==="S"){
            console.log("You sunk my battleship! @ " + row +", " + column);
            gameBoard[row][column] = null;
        }
    }
}

function getRandomNum(){
    return Math.floor(Math.random() * 5);
   }
   
