/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:


*******************************************************************************/
// function plannedIntersect(firstArr) {
//   return (secondArr) => {
//     let newArr = []
//     for (let i = 0; i < firstArr.length; i++){
//           let firstEl = firstArr[i]
//           if(secondArr.includes(firstEl)){
//               newArr.push(firstEl)
//           }
//     }
//     return newArr
//   }
// }

function plannedIntersect(firstArr) {
  return (secondArr) => {
    return firstArr.filter((el) => {
      if(secondArr.includes(el)) {
       return el
      }
    })
  }
}
// your code here
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]


let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/

try {
  module.exports = plannedIntersect;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
