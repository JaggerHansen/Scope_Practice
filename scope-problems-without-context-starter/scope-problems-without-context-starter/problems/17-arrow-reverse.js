/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed. 

Write this function using a fat arrow function!

Examples:



***********************************************************************/
let arrowReverseString = str => str.split("").reverse().join("")
// your code here!
let result1 = console.log(arrowReverseString("hello")); // returns "olleh"
let result2 = console.log(arrowReverseString("garden")); // returns "nedrag"
let result3 = console.log(arrowReverseString("potato")); // returns "otatop"
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

try {
  module.exports = arrowReverseString;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
