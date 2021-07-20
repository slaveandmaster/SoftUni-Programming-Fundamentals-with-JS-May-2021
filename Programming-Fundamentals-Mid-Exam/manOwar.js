function manOwar(input) {
  let pirateShips = input.shift().split(">").map(Number);
  let warships = input.shift().split(">").map(Number);
  let maxHealth = Number(input.shift());
  let line = input.shift();
  let isWin = true;
  while (line != "Retire") {
    
    let [cmd, ...items] = line.split(" ");
    switch (cmd) {
      case "Fire":
        fire(items);
        break;
      case "Defend":
        defend(items);
        break;
      case "Repair":
        repair(items);
        break;
      case "Status":
        status();
        break;
      default:
        break;
    }
    
    line = input.shift();
  }

  function fire(items) {
    let idx = Number(items[0]);
    let damage = Number(items[1]);
    if (idx >= 0 && idx < pirateShips.length) {
      warships[idx] -= damage;
      if (warships[idx] <= 0) {
        console.log(`You won! The enemy ship has sunken.`);
        isWin = true;
        return;
      }
    }
  }
  function defend(items) {
    let startIdx = Number(items[0]);
    let endIdx = Number(items[1]);
    let damage = Number(items[2]);

    if (startIdx >= 0 && endIdx < pirateShips.length) {
      for (let index = startIdx; index < endIdx; index++) {
        pirateShips[index] -= damage;
        if (pirateShips[index] <= 0) {
          console.log("You lost! The pirate ship has sunken.");
          isWin = false;
          break;
        }
      }
    }
  }
  function status() {
    let percentage = 0.2 * maxHealth;
    let forRepair = pirateShips.filter((x) => x < percentage).length;
    console.log(`${forRepair} sections need repair`);
  }
  function repair(items) {
    let idx = Number(items[0]);
    let heal = Number(items[1]);
    if (idx >= 0 && idx < pirateShips.length) {
      let currentHealth = pirateShips[idx];
      if (currentHealth + heal > maxHealth) {
        pirateShips[idx] = maxHealth;
      } else {
        pirateShips[idx] += heal;
      }
    }
  }
  if (isWin) {
      let pirateSum = pirateShips.reduce((acc,curr) => acc + curr,0);
      let warshipSum = warships.reduce((acc, curr) => acc + curr,0);
      //let warshipSum = warships.recude((acc,curr) => acc + curr,0);
      console.log(`Pirate ship status: ${pirateSum}`);
      console.log(`Warship status:${warshipSum}`);
  }

}
manOwar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
manOwar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
