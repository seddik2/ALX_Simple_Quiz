// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedback = document.getElementById('feedback');

    // Provide feedback based on whether an answer was selected and if it is correct
    feedback.textContent = userAnswer
        ? userAnswer.value === correctAnswer
            ? "Correct! Well done."
            : "That's incorrect. Try again!"
        : "Please select an answer.";
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
