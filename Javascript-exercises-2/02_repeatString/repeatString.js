const repeatString = function(originalString, repetitionNumber) {
    if (repetitionNumber < 0){
        return "ERROR";
    }

    let newString = "";
    for (let i=0; i < repetitionNumber; i++){
        newString += originalString;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
