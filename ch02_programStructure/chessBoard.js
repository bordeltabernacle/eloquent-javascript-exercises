var size = 8;
var chessBoard = "";

for (var j = 0; j < size; j++) {
    // j equates to the x axis
    for (var i = 0; i < size; i++) {
        // i equates to the y axis
        if ((i + j) % 2 === 0) {
            // (i + j) gives us a point on the intersection between the x axis & the y axis
            // if this point is even make it a 'black' square, otherwise make it a 'white' square
            chessBoard += " ";
        } else {
            chessBoard += "#";
        }
    }
    chessBoard += "\n";
    // at the end of each x axis add a newline in order to move to the next point on the y axis
}

console.log(chessBoard);

// to illustrate the mathematical decision for when a square should be black (even) or white (odd).

var numberBoard = "";

for (var j = 0; j < size; j++) {
    for (var i = 0; i < size; i++) {
        if ((i + j) % 2 === 0) {
            numberBoard += "even\t";
        } else {
            numberBoard += "odd\t";
        }
    }
    numberBoard += "\n";
}

console.log(numberBoard);
