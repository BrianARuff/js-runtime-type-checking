/*
 Checks if value is of type error,
 if so then it returns true
 else it will return false;
*/
var isError = function (value) {
    return value instanceof Error && typeof value.message !== 'undefined';
};
module.exports = isError;
