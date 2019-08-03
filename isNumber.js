/*
 Checks if value is of type number,
 if so then it returns true
 else it will return false;
*/
var isNumber = function (value) {
    return typeof value === 'number' && isFinite(value);
};
module.exports = isNumber;
