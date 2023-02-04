// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let number = 1;
let sum = 0;
let count = 0;
while (number <= 100) {
  if (number % 2 == 0) {
    sum = sum + number;
    count++;
  }
  number++;
}
console.log("average", sum / count);
