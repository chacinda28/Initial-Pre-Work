
/* Excercise 

const increment = (function() {
  "use strict";
  return function increment(number, value) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6   

*/

//Solve

const increment = (function() {
  "use strict";
  return function increment(number, value=1) { //put on = 1 in argument value like this (value=1)
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
// I am learning how insert functions with default parameters, this  this parameter is activated when the argument is not specified (name =  "Anonymous").
