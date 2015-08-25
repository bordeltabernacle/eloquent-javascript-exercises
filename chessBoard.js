var size = 20;
var chessString = ' ';

for (var j = 1; j <= (size); j++) {
    for (var i = 0; i <= (size - 2); i++) {
        if (i % 2 === 0) {
            chessString += '#';
        } else {
            chessString += ' ';
        }
    }
    if (j < size) {
        if (j % 2 === 0) {
            chessString += '\n ';
        } else {
            chessString += '\n';
        }
    }
}

console.log(chessString);
