//dummy array for testing
const numbers = [10, 25, 7, 42, 19, 8, 33];

// 1. Find maximum number (Arrow Function)
const findMax = (arr) => {
      if (arr.length === 0) return null;
    let max = arr[0];
    for(let  num of arr){
        if(num>max){
            max = num;
        }
    }
    return max;
};

// 2. Calculate sum of all elements (Anonymous Function assigned to variable)
const calculateSum = function(arr){
      if (arr.length === 0) return 0;

    let sum = 0;
    arr.forEach(function(num){
        sum += num;
    });
    return sum;
};
// 3. Count number of odd numbers (Traditional Function)
function countOddNumbers(arr){
      if (arr.length === 0) return 0;

    let count = 0;
    for(let num of arr){
        if(num % 2 !==0){
            count++;
        }
    }
    return count;
}

//Display results;
console.log("Array:",numbers);
console.log("Maximum number:",findMax(numbers));
console.log("Sum of elements:",calculateSum(numbers));
console.log("Cout of odd numbers:",countOddNumbers(numbers));

/*test Array*/
const testArrays = {
  normal: [10, 25, 7, 42, 19, 8, 33],
  empty: [],
  single: [5],
  allEven: [2, 4, 6, 8],
  allOdd: [1, 3, 5, 7]
};
for (let key in testArrays) {
  const arr = testArrays[key];

  console.log(`\nTest Case: ${key}`);
  console.log("Array:", arr);
  console.log("Max:", findMax(arr));
  console.log("Sum:", calculateSum(arr));
  console.log("Odd Count:", countOddNumbers(arr));
}
