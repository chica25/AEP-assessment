/**
@param {string} str
@returns {number}
*/
module.exports = function(str){
  //Solution goes here
}


// use a for loop to iterate through the vowels
// you can use the length function to get the total length of the word
// create an if statement...

function getCount(str) {
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++ ){
   // console.log(str[i])
  //     abracadabra
      if(str[i] == 'a') {
        vowelCount += 1
      } else if(str[i] == 'e') {
        vowelCount += 1
      } else if(str[i] == 'i') {
        vowelCount += 1
      } else if(str[i] == 'o') {  
        vowelCount += 1
      } else if(str[i] == 'u') {  
        vowelCount += 1
      console.log(vowelCount)
    }
  }
   return vowelCount;
}
