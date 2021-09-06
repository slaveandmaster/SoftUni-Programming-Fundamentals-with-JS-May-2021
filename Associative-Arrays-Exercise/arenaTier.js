function arenaTier(input) {
  let gladiators = {};
  let line = input.shift();
  while (line != "Ave Cesar") {
    if (line.indexOf(" -> ") > -1) {
      let [name, techique, skill] = line.split(" -> ");
      if (!gladiators.hasOwnProperty(name)) {
        gladiators[name] = {};
      }
      if (!gladiators[name].hasOwnProperty(techique)) {
        gladiators[name][techique] = [];
      }
      let currentSkill = gladiators[name][techique];
      if (currentSkill < skill) {
        gladiators[name][techique] = skill;
      }
      //  else {
      //   gladiators[name][techique].push(skill);
      // }
    } else {
      let [fighterOne, fighterTwo] = line.split(" vs ");
      if (
        gladiators.hasOwnProperty(fighterOne) &&
        gladiators.hasOwnProperty(fighterTwo)
      ) {
        let techniqueRefOne = gladiators[fighterOne];
        let techniqueRefTwo = gladiators[fighterTwo];
        for (const item in techniqueRefOne) {
          for (const itemTwo in techniqueRefTwo) {
            if (item == itemTwo) {
              if (techniqueRefOne[item] > techniqueRefTwo[item]) {
                delete gladiators[fighterTwo];
                break;
              } else {
                delete gladiators[fighterOne];
                break;
              }
            }
          }
        }
      }
    }
    line = input.shift();
  }
  //обхождаме всички гладиатори и изчисляваме общия сбор точки от умения и ги записваме в ново пропърти за всеки
  for (const key in gladiators) {
    //референция към текущия гладиатор
    let sumPoints = gladiators[key];
    let sum = 0;
    sum = Object.values(gladiators[key])
      .map(Number)
      .reduce((acc, next) => {
        return acc + next;
      }, 0);
    //добавяне на пропърти
    sumPoints["points"] = sum;
  }
  // console.log(gladiators);
  let sorted = Object.entries(gladiators)
    .sort(([gladiator, skills], [gladiatorTwo, skillsTwo]) => {
      return (
        skillsTwo.points - skills.points ||
        gladiator.localeCompare(gladiatorTwo)
      );
    })
    .forEach((item) => {
      console.log(`${item[0]}: ${item[1].points} skill`);
      delete item[1].points;
      Object.entries(item[1])
        .sort((a, b) => {
          return b[1] - a[1] || a[0].localeCompare(b[0]);
        })
        .forEach((el) => {
          console.log(`- ${el[0]} <!> ${el[1]}`);
        });
    });
}
arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
