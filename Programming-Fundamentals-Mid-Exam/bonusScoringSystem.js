function bonusScoringSystem(input) {
    let bonusPoints = 0;
    let countOfStudents = Number(input.shift());
    let countOfLecture = Number(input.shift());
    let additionalBonus = Number(input.shift());
    let max = 0;
    //let attendances = Number(input.shift());
    if (countOfStudents == 0 || countOfLecture == 0) {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
        return;
    }
        max = Math.max(...input);
        let totalBonus = max / countOfLecture * (5 + additionalBonus);
        console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
        console.log(`The student has attended ${max} lectures.`);

}
bonusScoringSystem([
    '0', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])
bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  )  