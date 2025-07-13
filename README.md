# Quiz_Master
## Date:12-07-2025
## Objective:
To demonstrate the concepts of callback functions and higher-order functions in JavaScript by building a simple quiz scoring system where the evaluation logic is passed as a callback to a higher-order function.

## Tasks:

#### 1. Create the HTML Layout:
Add a heading ```<h1>QuizMaster</h1>```

Add a few mock questions (or inputs for answers — optional)

Add a “Check Score” button

Display the final score in a ```<div> or <p>```

#### 2. Add CSS Styling:
Style the layout with a clean font and spacing

Add background color and rounded buttons

Keep the output score in a prominent style

#### 3. JavaScript Functionality:
Create a higher-order function called calculateScore(callback)

The callback will contain the logic for checking answers (or mocked results)

Pass different callback functions to demonstrate modular scoring (e.g., strict or lenient scoring)
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>QuizMaster</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="quiz-container">
    <h1>QuizMaster</h1>

    <div class="quiz-box">
      <div class="question">
        <label>1. Who was the first captain of the Indian women’s cricket team?</label>
        <input type="text" id="q1" placeholder="Enter answer" />
      </div>

      <div class="question">
        <label>2. Who is the highest run-scorer in women’s ODIs for India?</label>
        <input type="text" id="q2" placeholder="Enter answer" />
      </div>

      <div class="question">
        <label>3. Which Indian woman cricketer is known for fast bowling and played in 2005 and 2017 World Cup finals?</label>
        <input type="text" id="q3" placeholder="Enter answer" />
      </div>

      <div class="btn-area">
        <button onclick="calculateScore(strictScoring)">Strict Score</button>
        <button onclick="calculateScore(lenientScoring)">Lenient Score</button>
      </div>

      <p id="result"></p>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>


```
## CSS Code:
```
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to right, #e6f0ff, #ffffff);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.quiz-container {
  width: 100%;
  max-width: 550px;
  padding: 20px;
}
h1 {
  text-align: center;
  color: #003366; 
  margin-bottom: 25px;
  font-size: 2.2rem;
}
.quiz-box {
  background-color: #f2f2f2; 
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.question {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 600;
  color: black;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}
.btn-area {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  flex: 1;
  margin: 0 5px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: rgb(22, 128, 157);
  color: black;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #a71051;
}
#result {
  margin-top: 30px;
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: #000;
  background-color: rgb(22, 128, 157);
  padding: 10px;
  border-radius: 8px;
}

```
## JavaScript Code:
```
function calculateScore(callback) {
  const userAnswers = [
    document.getElementById("q1").value.trim(),
    document.getElementById("q2").value.trim(),
    document.getElementById("q3").value.trim()
  ];

  const correctAnswers = [
    "Shantha Rangaswamy",
    "Mithali Raj",
    "Jhulan Goswami"
  ];

  const score = callback(userAnswers, correctAnswers);
  document.getElementById("result").textContent = `Your Score: ${score}/3`;
}

function strictScoring(user, correct) {
  let score = 0;
  for (let i = 0; i < correct.length; i++) {
    if (user[i] === correct[i]) {
      score++;
    }
  }
  return score;
}

function lenientScoring(user, correct) {
  let score = 0;
  for (let i = 0; i < correct.length; i++) {
    if (user[i].toLowerCase() === correct[i].toLowerCase()) {
      score++;
    }
  }
  return score;
}

```
## Output:

<img width="1907" height="1020" alt="image" src="https://github.com/user-attachments/assets/e719a389-6cc9-4739-b06b-d973d5668ffc" />


## Result:
A mini module using JavaScript callbacks and higher-order functions is successfully created. This reinforces real-world use of passing functions as arguments to other functions and modularizes logic for reusability.
