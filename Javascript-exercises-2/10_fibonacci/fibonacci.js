const fibonacci = function(num) {
    if(num <= 0){
        return 'OOPS';
    }

    let fibonacci = [];

    for(let i = 0 ; i < num ; i++){
        if (i === 0 || i === 1){
            fibonacci.push(1);
            continue;
        };
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    };
    return fibonacci[num-1];

};

// Do not edit below this line
module.exports = fibonacci;
