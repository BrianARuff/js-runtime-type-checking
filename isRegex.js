/*
 Checks if value is of type regex,
 if so then it returns true
 else it will return false;
*/
var isRegex = function (value) {
    return value && typeof value === 'object' && value.constructor === RegExp;
};
module.exports = isRegex;
