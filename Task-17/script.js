//Arrow function that returns a Promise
const divideNumbers = (num1,num2) => {
    return new Promise ((resolve, reject)  => {

        console.log(`Dividing ${num1} by ${num2}...`);

        if(num2 === 0){
            reject("Error: Division by zero is not allowed.");
        }
        else{
            resolve(num1 / num2);
        }

    });
};

//Test case 1
divideNumbers(10, 2)
 .then(result => console.log("Result:", result))
 .catch(error =>console.log("Error", Error))

//Test case 2
divideNumbers(10,0)
.then(result => console.log("Result:", result))
 .catch(error =>console.log("Error", Error))

//Test case 3
divideNumbers(20,5)
.then(result => console.log("Result:", result))
.catch(error =>console.log("Error", Error))

//Test Case 4
divideNumbers(15,3)
.then(result => console.log("Result:", result))
.catch(error =>console.log("Error", Error))

//Test case 5
divideNumbers(50, 10)
    .then(result => console.log("Result:", result))
    .catch(error => console.log(error));