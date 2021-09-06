function armies(input) {
  let armyLeaders = {};
  for (let line of input) {
    if (line.includes(" arrives")) {
      let leader = line.split(" arrives")[0];
      if (!armyLeaders.hasOwnProperty(leader)) {
        armyLeaders[leader] = {};
      }
    } else if (line.includes(": ")) {
      let [leader, tokens] = line.split(": ");
      let [armyName, armyCount] = tokens.split(", ");
      if (armyLeaders.hasOwnProperty(leader)) {
        if (!armyLeaders[leader].hasOwnProperty(armyName)) {
          armyLeaders[leader][armyName] = 0;
        }
        armyLeaders[leader][armyName] = Number(armyCount);
      }
    } else if (line.includes(" + ")) {
      let [armyName, armyCount] = line.split(" + ");
      for (let leader in armyLeaders) {
        if (armyLeaders[leader].hasOwnProperty(armyName)) {
          armyLeaders[leader][armyName] += Number(armyCount);
        }
      }
    } else if (line.includes(" defeated")) {
      let [leader, defeated] = line.split(" defeated");
      if (armyLeaders.hasOwnProperty(leader)) {
        delete armyLeaders[leader];
      }
    }
  }
  let sortedByArmyCount = Object.entries(armyLeaders).sort((a,b) => {
      let [ army, armyCount ] = a;
      let [ armyB, armyCountB] = b;
      let sumA = Object.values(armyCount).reduce((a,b) => a + b ,0);
      let sumB = Object.values(armyCountB).reduce((a,b) => a + b ,0);

      return sumB - sumA || army.localeCompare(armyB);
  })
  for (const [leader, army]  of sortedByArmyCount) {
      let totalSumArmy = (leaderName) => {
         return Object.values(army).reduce((acc, curr) => acc + curr,0);
      }
      console.log(`${leader}: ${totalSumArmy(leader)}`);
      let sortedArmy = Object.entries(army).sort((a,b) => b[1] - a[1]);
      for (const [armyName, armyCount] of sortedArmy) {
          console.log(`>>> ${armyName} - ${armyCount}`);
      }
  }
}
armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
