function checkAge(age) {
  if(age < 18) {
    throw new Error("You must be at least 18 years old.");
  }
  return "Access granted";
}

try {
  let message = checkAge(15);
  console.log(message);
} catch (error) {
  console.error(error.message);
}
