const hasDriverLicense = true; //A
// const hasDriverLicense = true; //A
// const hasGoodVision = true; //B
const hasGoodVision = true; //B
const isTired = true; //C

console.log(hasDriverLicense && hasGoodVision);

console.log(hasDriverLicense || hasGoodVision);

console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
