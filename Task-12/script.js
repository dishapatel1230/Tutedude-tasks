let principalAmount = 5000;  //p
let annualrate = 0.1;        //r (10% converted to decimal)
let timeInYears= 3;          // t (years)
let n=1;               // number of times compounded per year

function calculateCI(principal, rate, time, frequency) {
//calculate amount using operator A = p*(1+rate/n)^nt;
let amount =  principal * (1 + rate / frequency) ** (frequency * time);
//calculate compound interest 
let compoundInterest  = amount - principal;

console.log(`\nCompounding Frequency: ${frequency} time(s) per year`);
console.log(`Final Amount: ₹${amount}`);
console.log(`The Compound Interest:₹${compoundInterest}`);
}

// Different compounding frequencies
calculateCI(principalAmount, annualRate, timeInYears, 1);   // yearly
calculateCI(principalAmount, annualRate, timeInYears, 2);   // half-yearly
calculateCI(principalAmount, annualRate, timeInYears, 4);   // quarterly
calculateCI(principalAmount, annualRate, timeInYears, 12);  // monthly