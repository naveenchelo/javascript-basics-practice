const birthYear = "1990";

console.log(birthYear + 5); // 1990

console.log(Number(birthYear) - 5); // 1985

//type coercion
console.log("5" + 5 + "number");

console.log("5" - 5 + "number");

let n = "2" + 1; // "21" (string concatenation)
console.log(n); // "21"
n = n - 1; // "21" - 1 = 20 (number subtraction)
console.log(n);
