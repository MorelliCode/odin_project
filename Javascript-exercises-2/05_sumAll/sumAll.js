const sumAll = function() {
    let startNumber;
    let endNumber;
    let sum = 0;

    if (
        arguments[0] < 0 ||
        typeof arguments[0] === 'string' ||
        Array.isArray(arguments[0]) ||
        arguments[1] < 0 ||
        typeof arguments[1] === 'string' ||
        Array.isArray(arguments[1])
        ){

        return "ERROR";
    }

    if ( arguments[0] > arguments[1]){
        startNumber = arguments[1];
        endNumber = arguments[0];
    }
    else {
        startNumber = arguments[0];
        endNumber = arguments[1];
    }

    for ( i = startNumber ; i <= endNumber ; i++ ){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
