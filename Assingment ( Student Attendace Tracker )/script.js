var numberOfStudents = Number(prompt("How many students are there?"));
var students = []; 
var absentStudents = []; 

for (var i = 0; i < numberOfStudents; i++) {
    var studentName = prompt(`Name of student ${i + 1}:`); 

    var attendanceStatus;
    while (true) {
        attendanceStatus = prompt(`${studentName} is present? (Present/Absent)`).toLowerCase(); 
        if (attendanceStatus === "present") {
            students.push(studentName); 
            break; 
        } else if (attendanceStatus === "absent") {
            absentStudents.push(studentName); 
            break; 
        } else {
            alert("Wrong Information! Please write 'Present' or 'Absent'."); 
        }
    }
}

alert(`Total Present Students: ${students.length}\nPresent Students: ${students.join(", ")}\nAbsent Students: ${absentStudents.join(", ")}`);
