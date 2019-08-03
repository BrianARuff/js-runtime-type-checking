/* 
 Checks if value is of type error,
 if so then it returns true
 else it will return false;
*/
const isError = (value:any) => {
  return value instanceof Error && typeof value.message !== 'undefined';
}

module.exports = isError;