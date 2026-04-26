//dummy array for testing
const numbers = [10, 25, 7, 42, 19, 8, 33];

// 1. Find maximum number (Arrow Function)
const findMax = (arr) => {
    let max = arr[0];
    for(let  num of arr){
        if(num>max){
            max = num;
        }
    }
    return max;
}

// 2. Calculate sum of all elements (Anonymous Function assigned to variable)
const calculateSum = function(arr){
    let sum = 0;
    arr.forEach(function(num){
        sum += num;
    });
    return sum;
};
// 3. Count number of odd numbers (Traditional Function)
function countOddNumbers(arr){
    let count = 0;
    for(let num of arr){
        if(num % 2 !==0){
            count++;
        }
    }
    return count++;
}

//Display results;
console.log("Array:",numbers);
console.log("Maximum number:",findMax(numbers));
console.log("Sum of elements:",calculateSum(numbers));
console.log("Cout of odd numbers:",countOddNumbers(numbers));
