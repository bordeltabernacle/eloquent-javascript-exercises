function countBs(string) {
    var count = 0;
    for (var i = 0; i <= string.length; i++) {
        if(string.charAt(i) === 'B') {
            count++;
        }
    }
    return "There are " + count + " B's in " + string;
}

console.log(countBs("AAAaaaBBBbbb"));

function countChar(string, char) {
    var count = 0;
    for (var i = 0; i <= string.length; i++) {
        if(string.charAt(i) === char) {
            count++;
        }
    }
    return "Character: " + char + "\n" + "String: " + string + "\n" + "Count: " + count;
}

console.log(countChar("The Quick Brown Fox", "x"));
console.log(countChar("Sassafrass", "s"));
