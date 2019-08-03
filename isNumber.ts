/* 
 Checks if value is of type number,
 if so then it returns true
 else it will return false;
*/
const isNumber = (value:any) => {
  return typeof value === 'number' && isFinite(value);
}

module.exports = isNumber;