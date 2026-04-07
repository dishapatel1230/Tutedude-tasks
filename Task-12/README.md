#  Compound Interest Calculator (JavaScript)

##  Objective

The objective of this project is to create a JavaScript program that calculates **compound interest** using predefined variables. The program implements the compound interest formula and displays the result using `console.log()`.

---

##  Formula Used

The compound interest is calculated using the formula:

A = P (1 + r/n) ^ (n × t)

Where:

* **P** = Principal amount
* **r** = Annual interest rate (in decimal)
* **n** = Number of times interest is compounded per year
* **t** = Time in years
* **A** = Final amount

Compound Interest (CI) = A - P

---

## Technologies Used

* JavaScript (Vanilla JS)
* Browser Console

---

##  How to Run the Project

1. Open the project folder in VS Code
2. Install **Live Server Extension**
3. Right-click on `index.html`
4. Click **"Open with Live Server"**
5. Open browser console (Press **F12**)
6. View the output

---

##  JavaScript Code

```javascript
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

```

---

##  Features

* Uses predefined variables
* Implements compound interest formula
* Displays output using `console.log()`
* Simple and beginner-friendly

---

##  Example Output

```
Principal: 5000
Final Amount: 6655.00
Compound Interest: 1655.00
```

---

##  Learning Outcome

* Understanding of JavaScript variables and operators
* Implementation of mathematical formulas in code
* Use of browser console for debugging and output

