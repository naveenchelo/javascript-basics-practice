const birthYear = 1990;
const firstName = "John";
const lastName = "Doe";
const job = "Software Engineer";
const salary = 50000;

console.log(
  "My name is " +
    firstName +
    " " +
    lastName +
    ". I am a " +
    job +
    " and I earn $" +
    salary +
    " per year." +
    "My age is " +
    (2025 - birthYear) +
    "yeras old."
);

console.log(
  `My name is ${firstName} ${lastName}. I am a ${job} and I earn ${salary} per year. My age is ${
    2025 - birthYear
  } years old.`
);

console.log(`hello ${firstName} ${lastName}`);

console.log(`hello
    hai
    I am
    okay`);

console.log(`hello \n ${firstName} ${lastName} \n I'm okay`);

//Output:
//My name is John Doe. I am a Software Engineer and I earn $50000 per year. My age is 35 years old.
//My name is John Doe. I am a Software Engineer and I earn $50000 per year. My age is 35 years old.
//hello John Doe
//hello
// hai
// I am
//okay
//hello
//  John Doe
//  I'm okay
