function calculateMarks() {
    var subject1 = +(document.getElementById("subject1").value);
    var subject2 = +(document.getElementById("subject2").value);
    var subject3 = +(document.getElementById("subject3").value);
    var subject4 = +(document.getElementById("subject4").value);

    var obtainedMarks = subject1 + subject2 + subject3 + subject4;
    var percentage = (obtainedMarks / 400) * 100;

    var grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Obtained Marks: " + obtainedMarks + "<br>" +
                          "Percentage: " + percentage + "%" + "<br>" +
                          "Grade: " + grade;
}
