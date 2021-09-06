function plantDiscovery(input) {
  let n = Number(input.shift());
  let allPlants = input.slice(n);
  let plants = {};
  let actions = {
    Rate: Rate,
    Update: Update,
    Reset: Reset,
  };
  //create initial catalog of plants
  for (let index = 0; index < n; index++) {
    let [plant, rarity] = input[index].split("<->");

    plants[plant] = {
      rarity: Number(rarity),
      rating: [],
      avrRating: 0,
    };
  }
  let line = allPlants.shift();
  while (line != "Exhibition") {
    let tokens = line.split(": ");
    let command = tokens[0];
    actions[command](tokens);
    line = allPlants.shift();
  }
  //console.log(plants);
  let sorted = Object.entries(plants).sort((a, b) => {
    // let rarityA = a[1].rarity;
    // let rarityB = b[1].rarity;

    // let ratingA = a[1].avrRating;
    // let ratingB = b[1].avrRating;
    let [ plantA , rarityA ] = a;
    let [ plantB , rarityB ] = b;
    let [ , ratingA] = a;
    let [ , ratingB] = b;
    return (
     // (rarityB - rarityA) || (ratingB - ratingA)
     rarityB.rarity - rarityA.rarity || ratingB.avrRating - ratingA.avrRating
    );
  });
  
  console.log(`Plants for the exhibition:`);
  for (const [item, subItem] of sorted) {
    console.log(
      `- ${item}; Rarity: ${
        subItem.rarity
      }; Rating: ${subItem.avrRating.toFixed(2)} `
    );
  }
  function Rate(row) {
    let [plant, rate] = row[1].split(" - ");
    if (plants[plant] != undefined) {
      let plantName = plants[plant];
      plantName.rating.push(Number(rate));
      let total = 0;
      for (const item of plantName.rating) {
        total += item;
      }
      plantName.avrRating = total / plantName.rating.length;
    } else {
      console.log(`error`);
    }
  }
  function Update(row) {
    let [plant, newRarity] = row[1].split(" - ");
    if (plants[plant] != undefined) {
      let refPlant = plants[plant];
      refPlant.rarity = Number(newRarity);
    } else {
      console.log(`error`);
    }
  }
  function Reset(row) {
    let plant = row[1];
    if (plants[plant] != undefined) {
      let plantName = plants[plant];
      plantName.avrRating = 0;
      plantName.rating.length = 0;
    } else {
      console.log(`error`);
    }
  }
}
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
