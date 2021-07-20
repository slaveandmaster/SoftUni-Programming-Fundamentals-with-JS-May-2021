function blackFlag(input) {
  let days = Number(input.shift());
  let dailyPlunder = Number(input.shift());
  let expectedPlunder = Number(input.shift());
  let plunder = 0;
  let countDays = 0;
  for (let index = 0; index < days; index++) {
    countDays++;
    plunder += dailyPlunder;
    if (countDays % 3 === 0) {
      plunder += 0.5 * dailyPlunder;
    }
    if (countDays % 5 === 0) {
      plunder -= plunder * 0.3;
    }
  }
  if (plunder >= expectedPlunder) {
    console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
  } else if (plunder < expectedPlunder) {
    let percentage = (plunder * 100) / expectedPlunder;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
