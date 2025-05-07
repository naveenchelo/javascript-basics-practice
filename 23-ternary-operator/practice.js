const age = 10;
const isAdult =
  age >= 18
    ? console.log("Eligible to drive a car")
    : console.log("Not eligible to drive a car");

// The above code can be simplified to:
const isAdult2 =
  age >= 18 ? "Eligible to drive a car" : "Not eligible to drive a car";
console.log(isAdult2);
