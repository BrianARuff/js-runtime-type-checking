/* 
 Checks if value is of type date,
 if so then it returns true
 else it will return false;
*/
const isDate = (value:any) => {
  return value instanceof Date;
}

module.exports = isDate;