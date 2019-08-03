/*
 Checks if value is of type string,
 if so then it returns true
 else it will return false;
*/
var isString = function (value) {
    return typeof value === 'string' || value instanceof String;
};
module.exports = isString;
