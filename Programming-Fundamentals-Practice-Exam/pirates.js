function pirates(input) {
  let catalog = {};
  //create action object
  let actions = {
    Plunder: Plunder,
    Prosper: Prosper,
  };
  //iterate through input and fill object
  let line = input.shift();
  while (line != "Sail") {
    let [city, population, gold] = line.split("||");
    if (!catalog.hasOwnProperty(city)) {
      catalog[city] = {
        population: Number(population),
        gold: Number(gold),
      };
    } else {
      catalog[city].population += Number(population);
      catalog[city].gold += Number(gold);
    }

    line = input.shift();
  }
  line = input.shift();
  //iterate through array and manipulate catalog object
  while (line != "End") {
    let [command, city, ...params] = line.split("=>");
    actions[command](city, params);
    line = input.shift();
  }
  //sort and output
  let sorted = Object.entries(catalog).sort(compareGold);
  function compareGold(a, b) {
    return b[1].gold - a[1].gold || a[0].localeCompare(b[0]);
  }
  //sorted by their gold in descending order, then by their name in ascending order
  if (sorted.length == 0) {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`
    );
    for (const [city, obj] of sorted) {
      console.log(
        `${city} -> Population: ${obj.population} citizens, Gold: ${obj.gold} kg`
      );
    }
  }
  //create actions

  function Plunder(town, [victims, stolenGold]) {
    catalog[town].population -= Number(victims);
    catalog[town].gold -= Number(stolenGold);
    //For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
    console.log(
      `${town} plundered! ${stolenGold} gold stolen, ${victims} citizens killed.`
    );
    let currentGold = catalog[town].gold;
    let currentPopulation = catalog[town].population;
    //if population or gold reaches zero -> the town is disbanded
    //	You need to remove it from your collection of targeted cities and print
    //the following message: "{town} has been wiped off the map!"
    if (currentGold == 0 || currentPopulation == 0) {
      console.log(`${town} has been wiped off the map!`);
      delete catalog[town];
    }
  }
  function Prosper(town, gold) {
    //check if received gold is negative number . if gold is negative number
    // print: "Gold added cannot be a negative number!" and ignore the command.
    //else print the following message:
    //"{gold added} gold added to the city treasury. {town} now has {total gold} gold."
    if (gold < 0) {
      console.log(`Gold added cannot be a negative number!`);
    } else {
      catalog[town].gold += Number(gold);
      console.log(
        `${gold} gold added to the city treasury. ${town} now has ${catalog[town].gold} gold.`
      );
    }
  }
}
pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);

console.log("----------------");

pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
