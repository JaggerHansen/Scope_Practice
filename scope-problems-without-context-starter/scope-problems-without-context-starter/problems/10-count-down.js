/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will 
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it 
returns a string of "Happy New Year!". Look closely at how this function is 
invoked below:

1.  if num is === 0 return happynewYear 
2. create variable for the closure that counts num += 1
3. if number <= 0 return Happy New year
4. 
5.

***********************************************************************/
function countDownTimer(num) {
if (num === 0) return "Happy New Year!";
const count = () => {
  num -= 1;
  if (num <= 0) {
    return "Happy New Year!";
  } else {
    return count;
  }
};
return count;
}


// function countDownTimer(num) {
//  if (num === 0) return "Happy New Year!";
//  let counter = 0
//  num += 1
//  if (num <= 0){return "Happy New Year!"

// } else {
// }
//   return counter
// }


  console.log(countDownTimer(0)); // prints "Happy New Year!"


  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"


  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"


  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = countDownTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
