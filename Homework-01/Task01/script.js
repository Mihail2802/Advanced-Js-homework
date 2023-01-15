let result = 0;
userInput = Number(prompt("Please enter the number"));
for (let number = 1; number <= userInput; number++) {
  result += number;
}

console.log(`the sum of your number is ${result}`)