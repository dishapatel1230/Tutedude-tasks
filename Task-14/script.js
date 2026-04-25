// Take user input (you can replace this with a fixed number if needed)
let number = parseInt(prompt("Enter a number:"));

// 1️⃣ Sum of first N numbers
function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 2️⃣ Multiplication table
function printTable(n) {
    console.log(`\nTable of ${n}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

// 3️⃣ Optimized Prime Check (only up to √n)
function isPrimeNumber(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 4️⃣ Factors of number
function printFactors(n) {
    console.log(`\nFactors of ${n}:`);
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
        }
    }
}

// 5️⃣ Sum of digits
function sumOfDigits(n) {
    let sum = 0;

    // Loop extracts each digit using % 10 and removes it using Math.floor
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

// 6️⃣ Armstrong number check
function isArmstrong(n) {
    let original = n;
    let sum = 0;
    let digits = n.toString().length;

    // Each digit is raised to the power of total digits and added
    while (n > 0) {
        let digit = n % 10;
        sum += digit ** digits;
        n = Math.floor(n / 10);
    }

    return sum === original;
}


// 🔽 Display Results

console.log(`Sum of first ${number} numbers: ${sumOfN(number)}`);

printTable(number);

console.log(`\n${number} is ${isPrimeNumber(number) ? "a Prime" : "not a Prime"} number`);

printFactors(number);

console.log(`\nSum of digits of ${number}: ${sumOfDigits(number)}`);

console.log(`\n${number} is ${isArmstrong(number) ? "an Armstrong" : "not an Armstrong"} number`);