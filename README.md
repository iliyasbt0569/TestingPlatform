# 📚 Testing Platform

A web-based **interactive testing platform** designed to create, take, and review multiple-choice tests with ease. Perfect for educational purposes, self-assessment, and skill evaluations.

---

## 🖥️ Features

- **Multiple Test Support**: Load and switch between different test modules easily.  
- **Customizable Question Range**: Select the interval of questions to attempt.  
- **Difficulty Display**: Each question shows its difficulty level.  
- **Interactive Answer Selection**: Clickable answer options with immediate feedback.  
- **Result Summary**: View total score, percentage, and detailed answer overview.  
- **Review Mode**: Check which answers were correct or incorrect and see correct answers.  
- **Retry Functionality**: Restart the test without refreshing the page.  

---

## ⚡ Demo Screens

1. **Test Selection Screen**  
   Choose a test and define the question interval.

2. **Question Screen**  
   - Displays question text and difficulty.  
   - Shows multiple-choice options.  
   - Highlights correct and incorrect answers after selection.  

3. **Results Screen**  
   - Shows score and percentage.  
   - Provides detailed review of all questions.  
   - Option to retry the test.

---

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/iliyasbt0569/TestingPlatform.git
```

2. Open index.html in a web browser.

No server setup required; fully front-end based.

## 📂 Project Structure
```graphql
testing-platform/
│
├─ index.html          # Main HTML file
├─ styles.css          # Styles for the platform
├─ testings/           # Folder containing all test modules
│  ├─ ProgrammingInPython.js
│  ├─ FrontEnd.js
│  ├─ EconomicsLawAndFinancialLiteracy.js
│  ├─ OccupationalSafetyAndHealth.js
│  └─ SoftwareDevelopmentMethodologies.js
└─ README.md
```

## 📝 How to Add a New Test
1. **Create a new JS file in the testings/ folder.**
2. **Export the test name and content:**

```javascript
export const testingName = "New Test Name";
export const testingStr = `
<question1> Question text
<variantright> Correct answer
<variant> Wrong answer 1
<variant> Wrong answer 2
`;
```
The platform will automatically load it.

## 💡 Usage
1. **Open the platform in a browser.**
2. **Select a test and the range of questions to attempt.**
3. **Click Start the testing.**
4. **Select your answers for each question.**
5. **Review your results and detailed feedback at the end.**

## 🎯 Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6 Modules)**
Fully client-side; no backend required.

## 📌 Notes
- Make sure all test modules are located in the testings/ folder.
- Question intervals should be within the total number of questions in the selected test.
- Supports unlimited number of tests as long as they follow the module format.
