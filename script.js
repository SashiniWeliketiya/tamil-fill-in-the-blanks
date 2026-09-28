document.getElementById('check-btn').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.blank-input');
    let score = 0;
    let allAnswered = true;
    
    inputs.forEach(input => {
        const userAnswer = input.value.trim();
        const correctAnswer = input.getAttribute('data-answer');
        
        // Check if input is empty
        if (userAnswer === "") {
            allAnswered = false;
        }

        // Validate answer
        if (userAnswer === correctAnswer) {
            input.style.borderColor = '#2ed573'; // Green for correct
            input.style.backgroundColor = '#e8f8f0';
            input.style.color = '#2ed573';
            score++;
        } else {
            input.style.borderColor = '#ff4757'; // Red for wrong
            input.style.backgroundColor = '#ffeef0';
            input.style.color = '#ff4757';
        }
    });

    const scoreDisplay = document.getElementById('score-display');
    
    if (!allAnswered) {
        scoreDisplay.style.color = '#ffa502';
        scoreDisplay.innerHTML = `⚠️ හැම හිස් තැනකටම පිළිතුරක් ලියන්න! (Score: ${score} / ${inputs.length})`;
    } else {
        scoreDisplay.style.color = '#3742fa';
        scoreDisplay.innerHTML = `🌟 ඔයාගේ ලකුණු: ${score} / ${inputs.length}`;
    }
});