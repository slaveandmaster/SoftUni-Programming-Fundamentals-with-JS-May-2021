function inventory(heroArray) {
  //     You must store the data about every hero. The name is a string, the level is a number and the items are all strings.
  // The output is all of the data for all the heroes you’ve stored sorted ascending by level
  // and the items are sorted alphabetically. The data must be in the following format for each hero:
  let heroes = {};
  let heroesList = [];
  for (let index = 0; index < heroArray.length; index++) {
    let line = heroArray[index];
    let [hero, level, herosItems] = line.split(" / ");
    herosItems = herosItems.split(", ");
    let sortedItems = Object.values(herosItems).sort((a, b) => {
      return a.localeCompare(b);
    });

    heroes = {
      Hero: hero,
      level: Number(level),
      items: sortedItems,
    };
    heroesList.push(heroes);
  }
  heroesList.sort((a,b) => {
     return a.level - b.level;
  })
  for (let heroName of heroesList) {
      console.log(`Hero: ${heroName.Hero}`);
      console.log(`level => ${heroName.level}`);
      console.log(`items => ${heroName.items.join(', ')}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
