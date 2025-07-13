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
