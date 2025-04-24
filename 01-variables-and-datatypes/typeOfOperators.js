// The following code demonstrates the use of different data types in JavaScript.
// JavaScript is a dynamically typed language, meaning you don't have to declare the type of a variable when you create it.
// You can use the var, let, or const keywords to declare variables.
// var is function-scoped or globally-scoped, while let and const are block-scoped.
// The var keyword is used to declare a variable that can be reassigned.
// The let keyword is used to declare a variable that can be reassigned.
// The const keyword is used to declare a variable that cannot be reassigned.
// The following code demonstrates the use of different data types in JavaScript.
// JavaScript has several built-in data types, including:   
// 1. Number: Represents both integer and floating-point numbers.
// 2. String: Represents a sequence of characters.
// 3. Boolean: Represents a logical entity and can have two values: true or false.
// 4. Undefined: Represents a variable that has been declared but has not yet been assigned a value.        


let age = 30;
let firstName = "John";
let lastName = "Doe";
let isEmployed = true;
let salary = 50000.50;
let hobbies = ["reading", "traveling", "cooking"];
let address = {
  street: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001",
}
let nullValue = null;
let undefinedValue;
let symbolValue = Symbol("unique");
let bigIntValue = BigInt(12345678901234567890);
// The typeof operator returns a string indicating the type of the unevaluated operand.
// It can be used to check the type of a variable or value.
// The typeof operator can be used to check the type of a variable or value.
// The typeof operator can be used to check the type of a variable or value.                        


console.log(typeof age); // number
console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof isEmployed); // boolean
console.log(typeof salary); // number
console.log(typeof hobbies); // object (arrays are objects in JavaScript)
console.log(typeof address); // object
console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("symbol")); // symbol
console.log(typeof BigInt(12345678901234567890n)); // bigint
console.log(typeof function() {}); // function (functions are objects in JavaScript)