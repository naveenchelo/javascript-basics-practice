const age = 12;
const isAdult = age >= 18;

if (isAdult) {
  console.log("You are an adult.");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `You are not an adult. You have ${yearsLeft} years left until you become an adult.`
  );
  console.log("You are not an adult.");
}
