console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean([0])); // true
console.log(Boolean([false])); // true
console.log(Boolean([null])); // true
console.log(Boolean([undefined])); // true
console.log(Boolean([NaN])); // true
console.log(Boolean([{}])); // true
console.log(Boolean([[]])); // true

const money = 0; // 0 is falsy
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}

const money2 = 100;
if (money2) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
}
