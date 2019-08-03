/*
 Checks if value is of type function,
 if so then it returns true
 else it will return false;
*/
var isFunction = function (func) {
    return typeof func === "function";
};
module.exports = isFunction;
