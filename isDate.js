/*
 Checks if value is of type date,
 if so then it returns true
 else it will return false;
*/
var isDate = function (value) {
    return value instanceof Date;
};
module.exports = isDate;
