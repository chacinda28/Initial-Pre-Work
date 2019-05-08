//Exercise
/*
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
*/
//solve

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a]     // I am learning we can choose which elements want to assign to variables.
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
