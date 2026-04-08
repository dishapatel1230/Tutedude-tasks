//Given number
let number = 153;

//sum of first n number
let sumN = 0;
for(let i =1; i<=number;i++){
   sumN += i;
}
console.log(`Sum of First ${number} numbers: ${sumN}`);

//Mulitplication table
console.log(`Table of ${number}:`);
for(let i =1;i<=10;i++){
    console.log(`${number} * ${i} = ${number*i}`);
}

//prime number check
let isPrime = true;
if(number<= 1){
    isPrime = false;
} else {
    for (let i =2; i<=number;i++){
        if (number % i === 0){
            isPrime = false;
            break;
        }
    }
}
console.log(`${number} is ${isPrime ? "a prime" : "not a prime"}number`)

//factors of number
console.log(`Factors of ${number}:`);
for(let i=1;i<=number;i++){
    if(number % i === 0){
        console.log(i);
    }
}

//sum of digits
let tempNum = number;
let digitSum = 0;

while (tempNum > 0){
    digitSum += tempNum % 10;
    tempNum =Math.floor(tempNum/10);
    }
console.log(`Sum of digits of ${number}: ${digitSum}`)

//Armstrong number check
let originalNum = number;
let armstrongSum = 0;

while (originalNum > 0) {
    let digit = originalNum % 10;
    armstrongSum += digit ** 3;   // power 3 for 3-digit number
    originalNum = Math.floor(originalNum / 10);
}

if (armstrongSum === number) {
    console.log(`\n${number} is an Armstrong number`);
} else {
    console.log(`\n${number} is not an Armstrong number`);
}