/*
 Checks if value is of type boolean,
 if so then it returns true
 else it will return false;
*/
var isBoolean = function (value) {
    return typeof value === 'boolean';
};
module.exports = isBoolean;
