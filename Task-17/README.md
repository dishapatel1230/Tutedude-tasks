# JavaScript Promise Division Assignment

##  Objective

The objective of this assignment is to create a JavaScript function that performs division using **Promises**. The function should handle division by zero and return either the calculated result or an appropriate error message.

---

##  Requirements

- Create a JavaScript **arrow function**.
- The function should accept **two numbers** as input.
- Return a **Promise**.
- If the second number is **0**, reject the Promise with an error message.
- Otherwise, resolve the Promise with the division result.
- Use **dummy values** for testing.
- Demonstrate the function with **at least 5 test cases**.
- Handle both successful and failed Promise responses using `.then()` and `.catch()`.

---

##  Technologies Used

- JavaScript (ES6)
- Promises
- Arrow Functions

---

##  Project Structure

```
project-folder/
│
├── script.js
└── README.md
```

---

## Code Overview

The `divideNumbers` function:

- Accepts two numbers.
- Returns a Promise.
- Rejects if the divisor is zero.
- Resolves with the division result otherwise.

### Function

```javascript
const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }
    });
};
```

---

##  Test Cases

| Test Case | Input | Expected Output |
|-----------|-------|-----------------|
| 1 | (10, 2) | Result: 5 |
| 2 | (10, 0) | Error: Division by zero is not allowed. |
| 3 | (20, 5) | Result: 4 |
| 4 | (15, 3) | Result: 5 |
| 5 | (50, 10) | Result: 5 |

---

## Sample Output

```
Dividing 10 by 2...
Result: 5

Dividing 10 by 0...
Error: Division by zero is not allowed.

Dividing 20 by 5...
Result: 4

Dividing 15 by 3...
Result: 5

Dividing 50 by 10...
Result: 5
```

---

##  How to Run

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project folder

```bash
cd project-folder
```

### 3. Run the program

```bash
node script.js
```

---

## Concepts Covered

- JavaScript Promises
- Arrow Functions
- Error Handling
- `.then()` and `.catch()`

---

##  Learning Outcomes

After completing this assignment, you will understand:

- How to create and return Promises.
- How to resolve and reject Promises.
- How to manage runtime errors using Promise error handling.

---

##  Author

**Disha Patel**

Front-End Developer | JavaScript Enthusiast

---