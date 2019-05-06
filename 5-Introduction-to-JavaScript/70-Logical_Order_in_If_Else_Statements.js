function orderMyLogic(val) {
  if (val < 5 ) {
    return "Less than 5";   // use the operator less than with logical order (else if)
  } else if  (val < 10 ) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
