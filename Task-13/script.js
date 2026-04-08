// Function to check if a number is odd or even

function checkEvenOdd(number){
    
let remainder = number % 2;  // Modulo operator gives the remainder after division by 2

// If remainder is 0 → number is even, otherwise odd
let result = remainder === 0 ? "Even" : "Odd" // Ternary operator

console.log(`Number:${number}`);
console.log(`Result:${result}`);
}
// Calling function with different values
checkEvenOdd(7);
checkEvenOdd(15);
checkEvenOdd(8);
