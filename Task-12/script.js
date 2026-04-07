let principal = 5000;  //p
let rate = 0.1;        //r (10% converted to decimal)
let time = 3;          // t (years)
let n=1;               // number of times compounded per year

//calculate amount using operator A = p*(1+rate/n)^nt;
let amount =  principal * (1 + rate / n) ** (n * time);

//calculate compound interest 
let compoundInterest  = amount -principal;

console.log("Principal:",principal);
console.log("Amount:",amount);
console.log("The Compound Interest:", compoundInterest);
