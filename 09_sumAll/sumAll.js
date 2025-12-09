const sumAll = function(a,b) {
    if (a < 0 || b < 0) {return "ERROR"};
    if (!Number.isInteger(a) || !Number.isInteger(b)) {return "ERROR"};
    let start = Math.min(a,b);
    let end = Math.max(a,b);
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr.reduce((sum,current) => sum + current,0);
};

// Do not edit below this line
module.exports = sumAll;

