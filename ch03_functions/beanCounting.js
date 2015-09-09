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
