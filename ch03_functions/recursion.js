function isEven(number) {
    if(number > 0) {
        if(number - 2 === 0) {
            return true;
        } else if(number - 2 === 1) {
            return false;
        } else {
            return isEven(number - 2);
        }
    } else {
        if(number + 2 === 0) {
            return true;
        } else if(number + 2 === 1) {
            return false;
        } else {
            return isEven(number + 2);
        }
    }

}

console.log(isEven(-10));
