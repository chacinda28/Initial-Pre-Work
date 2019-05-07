// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
 var lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank",
  };
  result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("alpha");

//Using objects with lookpup. is very easy and is better code to short.
