// lose equality
// == operator
// type coercion
let a = "10";

if (a == 10) {
  console.log("a is equal to 10");
} else {
  console.log("a is not equal to 10");
}

// === operator
// no type coercion
// strict equality
let b = "10";

if (b === 10) {
  console.log("b is equal to 10");
} else {
  console.log("b is not equal to 10");
}

// == operator
// type coercion
const favoriteNumber = "7";

if (favoriteNumber == 7) {
  console.log("Your favorite number is 7!");
} else {
  console.log("Your favorite number is not 7.");
}

// === operator
const favoriteNum = 2;

if (favoriteNum === 7) {
  console.log("Your favorite number is 7!");
} else if (favoriteNum === 10) {
  console.log("Your favorite number is not 7.");
} else {
  console.log("Your favorite number is not 7 or 10.");
}
