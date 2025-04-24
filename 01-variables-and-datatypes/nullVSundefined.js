let a ;
let b= null;

console.log(a);
console.log(b);
// The above code will not throw an error because we are not reassigning a value to a constant variable.
console.log(typeof a);
console.log(typeof b);
// // The above code will throw an error because we cannot reassign a value to a constant variable.

//Output:
//undefined
//null
//undefine
//Object