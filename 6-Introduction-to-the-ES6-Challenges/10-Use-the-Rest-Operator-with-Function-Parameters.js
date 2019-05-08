//excercise
/*
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {                      //change the parameters for (...args)
    const args = [ x, y, z ];                         // Eliminate this line
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
*/


//Solve

const sum = (function() {
  "use strict";
  return function sum(...args) {  
   return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
//The rest operator not check the args.
