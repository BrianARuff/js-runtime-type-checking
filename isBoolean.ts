/* 
 Checks if value is of type boolean,
 if so then it returns true
 else it will return false;
*/
const isBoolean = (value:any) => {
  return typeof value === 'boolean';
}

module.exports = isBoolean;