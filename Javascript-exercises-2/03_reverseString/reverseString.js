const reverseString = function(originalString) {
    let newString = "";
    for (let i = originalString.length; i > 0; i--){
        newString += originalString.slice(i - 1, i);
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
