const removeFromArray = function() {
    let newArray = arguments[0];
    let paramLength= arguments.length;
    for (i=1 ; i <= arguments.length; i++){
        for (j=0 ; j<newArray.length; j++){
            if (newArray[j] === arguments[i])
                newArray.splice(j, 1);
        }
    }
    
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
