function calculateGrade() {
    let totalMarks = document.getElementById("totalMarks").value;
    let totalSubjects = document.getElementById("totalSubjects").value;

    totalMarks = Number(totalMarks);
    totalSubjects = Number(totalSubjects);

    let resultContainer = document.getElementById("result-container");
    let errorMsg = document.getElementById("error-msg");
    let gradeText = document.getElementById("grade-text");
    let averageText = document.getElementById("average-text");
    let resultElement = document.getElementById("result");

    if (totalMarks <= 0 || totalSubjects <= 0 || isNaN(totalMarks) || isNaN(totalSubjects)) {
        resultContainer.style.display = "none"; 
        errorMsg.style.display = "block"; 
        return;
    }

    errorMsg.style.display = "none"; 
    resultContainer.style.display = "flex"; 

    let average = totalMarks / totalSubjects;
    let grade, className;

    if (average >= 80) { grade = "A+"; className = "grade-box"; }
    else if (average >= 70) { grade = "A"; className = "grade-box"; }
    else if (average >= 60) { grade = "A-"; className = "grade-box"; }
    else if (average >= 50) { grade = "B"; className = "grade-box"; }
    else if (average >= 40) { grade = "C"; className = "grade-box"; }
    else if (average >= 33) { grade = "D"; className = "grade-box"; }
    else { grade = "F"; className = "grade-box grade-F"; }

    gradeText.innerText = `${grade}`;
    resultElement.className = `result-box ${className}`;

    averageText.innerText = `${average.toFixed(2)}`;
}