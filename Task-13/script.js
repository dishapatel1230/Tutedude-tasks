let number = 9;           
let remainder = number % 2;  //module operation
let result;                 //To store result;
let CheckType = "Odd/Even Type";

//if-else 

    if(remainder === 0){
      result = `${number} is Even`;  
    }else {
        result = `${number} is Odd`;
    }
console.log(CheckType);
console.log(result);