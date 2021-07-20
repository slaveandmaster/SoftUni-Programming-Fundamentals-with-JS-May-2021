function schoolGrades(input) {
  let schoolRegister = new Map();
  for (let line of input) {
    let [students, ...grades] = line.split(" ");
    if (!schoolRegister.has(students)) {
      schoolRegister.set(students, []);
    }

    let currentGrades = schoolRegister.get(students);
    grades = grades.map(Number);
    for (let grade of grades) {
      currentGrades.push(grade);
    }
  }
  let sorted = Array.from(schoolRegister).sort(calcAverage);
  function calcAverage([nameA, gradesA], [nameB, gradesB]) {
    let avrA =
      gradesA.reduce((acc, current) => acc + current, 0) / gradesA.length;
    let avrB =
      gradesB.reduce((acc, current) => acc + current, 0) / gradesB.length;
    return avrA - avrB;
  }
  for (let [name, grades] of sorted) {
    console.log(`${name}: ${grades.join(", ")}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
