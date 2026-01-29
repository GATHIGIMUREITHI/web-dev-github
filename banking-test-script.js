// Quiz data with questions and answers
const quizData = [
    {
        question: "What is the primary function of a commercial bank?",
        options: [
            "Printing currency",
            "Accepting deposits and providing loans",
            "Setting interest rates for the country",
            "Regulating other banks"
        ],
        correctAnswer: 1
    },
    {
        question: "What does 'KYC' stand for in banking?",
        options: [
            "Keep Your Cash",
            "Know Your Customer",
            "Key Yearly Credits",
            "Kinetic Yield Calculation"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT a digital banking channel?",
        options: [
            "Mobile banking app",
            "Internet banking",
            "ATM",
            "Physical currency exchange"
        ],
        correctAnswer: 3
    },
    {
        question: "What is two-factor authentication (2FA)?",
        options: [
            "Using two passwords",
            "A security process requiring two forms of identification",
            "Banking with two different banks",
            "Having two bank accounts"
        ],
        correctAnswer: 1
    },
    {
        question: "If you deposit $1,000 at 5% annual interest compounded annually, how much will you have after 1 year?",
        options: [
            "$1,000",
            "$1,050",
            "$1,500",
            "$1,005"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a cryptocurrency wallet used for?",
        options: [
            "Storing physical money",
            "Storing digital currencies",
            "Storing credit cards",
            "Storing bank statements"
        ],
        correctAnswer: 1
    },
    {
        question: "What does API stand for in digital banking?",
        options: [
            "Advanced Payment Interface",
            "Automatic Processing Integration",
            "Application Programming Interface",
            "Authorized Personal Identification"
        ],
        correctAnswer: 2
    },
    {
        question: "Which of these is a common security threat in digital banking?",
        options: [
            "Phishing attacks",
            "Good customer service",
            "Fast transactions",
            "Mobile apps"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of encryption in digital banking?",
        options: [
            "To speed up transactions",
            "To protect sensitive data from unauthorized access",
            "To create new accounts",
            "To calculate interest rates"
        ],
        correctAnswer: 1
    },
    {
        question: "What does 'PCI DSS' relate to in banking?",
        options: [
            "Personal Credit Information",
            "Payment Card Industry Data Security Standard",
            "Public Credit Insurance",
            "Private Customer Identity System"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a SWIFT code used for?",
        options: [
            "Quick loan approval",
            "International money transfers",
            "ATM withdrawals",
            "Credit card payments"
        ],
        correctAnswer: 1
    },
    {
        question: "Which technology enables contactless payments?",
        options: [
            "Bluetooth",
            "Wi-Fi",
            "NFC (Near Field Communication)",
            "GPS"
        ],
        correctAnswer: 2
    },
    {
        question: "What is meant by 'financial inclusion' in digital banking?",
        options: [
            "Including all currencies",
            "Making banking services accessible to all people",
            "Including all types of loans",
            "Merging all banks"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the primary benefit of mobile banking?",
        options: [
            "It's more expensive",
            "Convenience and 24/7 access to banking services",
            "It requires more paperwork",
            "It only works during business hours"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a digital signature in banking transactions?",
        options: [
            "A scanned copy of your handwritten signature",
            "A cryptographic technique to verify authenticity",
            "Your signature on a touchscreen",
            "An email address"
        ],
        correctAnswer: 1
    }
];

// Global variables
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);
let timeRemaining = 900; // 15 minutes in seconds
let timerInterval;

// Initialize the test
function startTest() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('test-screen').classList.add('active');
    document.getElementById('timer').style.display = 'inline-block';
    displayQuestion();
    startTimer();
}

// Display current question
function displayQuestion() {
    const question = quizData[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        optionDiv.tabIndex = 0;
        optionDiv.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectOption(index);
            }
        };
        
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionsContainer.appendChild(optionDiv);
    });
    
    updateNavigation();
    updateProgress();
}

// Select an option
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (index === optionIndex) {
            option.classList.add('selected');
        }
    });
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Update navigation buttons
function updateNavigation() {
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = quizData.length;
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

// Start timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        
        document.getElementById('time').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitTest();
        }
    }, 1000);
}

// Submit test
function submitTest() {
    if (!confirm('Are you sure you want to submit the test? You will not be able to change your answers.')) {
        return;
    }
    
    clearInterval(timerInterval);
    
    let score = 0;
    quizData.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });
    
    displayResults(score);
}

// Display results
function displayResults(score) {
    document.getElementById('test-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    
    const percentage = Math.round((score / quizData.length) * 100);
    
    document.getElementById('score-percentage').textContent = percentage + '%';
    document.getElementById('score-value').textContent = score;
    document.getElementById('total-score').textContent = quizData.length;
    
    // Performance message
    const messageDiv = document.getElementById('performance-message');
    if (percentage >= 90) {
        messageDiv.textContent = 'Excellent! You have a strong understanding of digital banking!';
        messageDiv.className = 'performance-message excellent';
    } else if (percentage >= 70) {
        messageDiv.textContent = 'Good job! You have a solid grasp of banking concepts.';
        messageDiv.className = 'performance-message good';
    } else if (percentage >= 50) {
        messageDiv.textContent = 'Fair performance. Consider reviewing the material.';
        messageDiv.className = 'performance-message average';
    } else {
        messageDiv.textContent = 'You may need more preparation in digital banking concepts.';
        messageDiv.className = 'performance-message poor';
    }
    
    // Display answer summary
    const summaryDiv = document.getElementById('answer-summary');
    summaryDiv.innerHTML = '';
    
    quizData.forEach((question, index) => {
        const answerItem = document.createElement('div');
        answerItem.className = 'answer-item ' + 
            (userAnswers[index] === question.correctAnswer ? 'correct' : 'incorrect');
        
        const isCorrect = userAnswers[index] === question.correctAnswer;
        const userAnswerText = userAnswers[index] !== null 
            ? question.options[userAnswers[index]] 
            : 'Not answered';
        
        answerItem.innerHTML = `
            <strong>Q${index + 1}: ${question.question}</strong>
            <div class="user-answer">Your answer: ${userAnswerText} ${isCorrect ? '✓' : '✗'}</div>
            ${!isCorrect ? `<div class="correct-answer">Correct answer: ${question.options[question.correctAnswer]}</div>` : ''}
        `;
        
        summaryDiv.appendChild(answerItem);
    });
}

// Retake test
function retakeTest() {
    clearInterval(timerInterval);
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(null);
    timeRemaining = 900;
    
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
    document.getElementById('timer').style.display = 'none';
    document.getElementById('time').textContent = '15:00';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('total-questions').textContent = quizData.length;
});
