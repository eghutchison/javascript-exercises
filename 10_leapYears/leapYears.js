const leapYears = function(yr) {
    if (yr % 4 === 0 && (yr % 100 != 0 || yr % 400 === 0)) {
        return true;
    };
    return false;
};

// Do not edit below this line
module.exports = leapYears;

// perform action on argument to determine if leap year === true
// if arg / 4 === true > arg / 100 > arg / 400