# Digital Banking Aptitude Test

A comprehensive web-based aptitude test designed to assess knowledge and skills in digital banking concepts.

## Overview

This aptitude test evaluates candidates on various aspects of digital banking including:
- Banking fundamentals
- Digital banking technologies
- Financial calculations
- Security and compliance
- Customer service principles

## Features

- **15 Multiple Choice Questions**: Covering key digital banking topics
- **15-Minute Timer**: Automatic submission when time expires
- **Progress Tracking**: Visual progress bar showing test completion
- **Instant Results**: Immediate scoring and detailed answer review
- **Performance Feedback**: Personalized feedback based on score
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Professional UI**: Modern banking-themed interface

## How to Use

1. Open `banking-aptitude-test.html` in a web browser
2. Read the instructions on the welcome screen
3. Click "Start Test" to begin
4. Select your answer for each question
5. Navigate using "Previous" and "Next" buttons
6. Submit the test when complete or when time expires
7. Review your results and detailed answer explanations

## Test Structure

- **Total Questions**: 15
- **Time Limit**: 15 minutes
- **Scoring**: 1 point per correct answer
- **Passing Score**: 70% or higher recommended

## Topics Covered

1. Commercial banking basics
2. KYC (Know Your Customer) regulations
3. Digital banking channels
4. Authentication and security
5. Financial calculations
6. Cryptocurrency fundamentals
7. Banking APIs
8. Cybersecurity threats
9. Data encryption
10. PCI DSS compliance
11. International transfers (SWIFT)
12. Contactless payment technology
13. Financial inclusion
14. Mobile banking benefits
15. Digital signatures

## Performance Levels

- **Excellent (90-100%)**: Strong understanding of digital banking
- **Good (70-89%)**: Solid grasp of banking concepts
- **Average (50-69%)**: Basic knowledge, review recommended
- **Below Average (<50%)**: Further study needed

## Technical Details

### Files Included
- `banking-aptitude-test.html` - Main HTML structure
- `banking-test-styles.css` - Styling and responsive design
- `banking-test-script.js` - Quiz logic and interactivity

### Technologies Used
- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript (ES6+)

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Customization

To modify the test:

1. **Add/Edit Questions**: Update the `quizData` array in `banking-test-script.js`
2. **Change Time Limit**: Modify `timeRemaining` variable (in seconds)
3. **Adjust Styling**: Edit `banking-test-styles.css`
4. **Modify Scoring Thresholds**: Update percentage values in `displayResults()` function

## Sample Question Format

```javascript
{
    question: "Your question here?",
    options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    correctAnswer: 0  // Index of correct option (0-3)
}
```

## License

This project is open source and available for educational and professional use.

## Contributing

Feel free to fork this project and submit pull requests for improvements.

## Support

For issues or questions, please create an issue in the repository.
