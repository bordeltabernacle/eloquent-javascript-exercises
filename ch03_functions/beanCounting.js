function countBs(string) {
    var count = 0;
    for (var i = 0; i <= string.length; i++)
        if(string.charAt(i) === 'B')
            count++;
    return count;
}

function countChar(string, char) {
    var count = 0;
    for (var i = 0; i <= string.length; i++)
        if(string.charAt(i) === char)
            count++;
        return count;
}

console.log(countBs("AAAaaaBBBbbb"));
// 3
console.log(countChar("The Quick Brown Fox", "x"));
// 1
console.log(countChar("Sassafrass", "s"));
// 4
