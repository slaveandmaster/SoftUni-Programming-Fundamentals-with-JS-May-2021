function schoolRegister(students) {
  //създаваме празен обект който ще съдържа информацията за студентите
  let studentList = {};
  //трябва да вземем всеки ред от масива и да го обработим така че да взмеме името на студента
  // и неговия успех
  students.forEach((line) => {
    let studentInfo = line.split(", ");
    let studentName = studentInfo[0].split(": ")[1];
    let grade = Number(studentInfo[1].split(": ")[1]) + 1;
    let score = Number(studentInfo[2].split(": ")[1]);

    let student = { studentName, score };
    if (score > 3) {
      if (!studentList.hasOwnProperty(grade)) {
        studentList[grade] = [];
      }
      studentList[grade].push(student);
    }
  });
  let sortedStudentList = Object.keys(studentList).sort((a, b) => a - b);
  //     9 Grade
  // List of students: Mark, Daryl
  // Average annual grade from last year: 5.35
  for (let grades of sortedStudentList) {
    console.log(`${grades} Grade `);
    let students = studentList[grades];
    console.log(
      `List of students: ${students.map((x) => x.studentName).join(", ")}`
    );
    console.log(
      `Average annual grade from last year: ${calcAverage(
        students.map((x) => x.score)
      ).toFixed(2)}\n`
    );
  }
  function calcAverage(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
}
schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
