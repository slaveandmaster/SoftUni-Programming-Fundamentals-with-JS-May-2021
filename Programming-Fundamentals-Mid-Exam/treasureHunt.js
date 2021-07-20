function treasureHunt(input) {
  let initialLoot = input.shift().split("|");
  let line = input.shift();
  while (line != "Yohoho!") {
    let [cmd, ...items] = line.split(" ");
    switch (cmd) {
      case "Loot":
        loot(items);
        break;
      case "Drop":
        drop(items[0]);
        break;
      case "Steal":
        steal(items[0]);
        break;
      default:
        break;
    }

    line = input.shift();
  }
  function loot(listItems) {
    for (let item of listItems) {
      if (!initialLoot.includes(item)) {
        initialLoot.unshift(item);
      }
    }
  }
  function drop(index) {
    index = Number(index);
    if (index >= 0 && index < initialLoot.length) {
      initialLoot.push(initialLoot.splice(index, 1));
    }
  }
  function steal(index) {
    let idx = index;
    let chunk = initialLoot.splice(-idx, index);
    console.log(chunk.join(", "));
  }

  let averageSum = initialLoot.reduce((acc, item) => {
    acc[item] = item.length;
    return acc;
  }, {});
  if (initialLoot.length > 0) {
    let averageGain =
      Object.values(averageSum).reduce((acc, curr) => {
        return acc + curr;
      }, 0) / initialLoot.length;
    console.log(
      `Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`
    );
  } else {
    console.log(`Failed treasure hunt.`);
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
