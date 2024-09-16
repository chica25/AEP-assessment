/**
@param {number} num
@returns {number}
*/
module.exports = function(num){
  //Solution goes here
}

/*
Pseudo code
- need to convert number into a string
- can use the split function and join to concatenate
- need to use the square operator
- can use the for loop to iterate 
*/

function squareDigits(num){
  let string = String(num)
  let result = "";
  
  for(let i = 0; i < string.length; i++){
    result += string[i] ** 2
  }
  return Number(result);
}