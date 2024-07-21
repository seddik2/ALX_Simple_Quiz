// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4"; // This is the value of the correct answer

    // Retrieve the user's selected radio button
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedback = document.getElementById('feedback');

    // Check if an answer was selected
    if (userAnswerElement) {
        // Extract the value from the selected radio button's id attribute
        const userAnswer = userAnswerElement.nextElementSibling.textContent;

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "Please select an answer.";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
