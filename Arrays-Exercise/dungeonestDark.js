function dungeonestDark(input) {
  //задаваме началните стойности за health и монети
  let health = 100;
  let coins = 0;
  let rooms = input.toString().split("|");
  let countRooms = 0;

  //обхождаме всяка стая и я сплитваме отново за да вземем item и monster number
  for (let i = 0; i < rooms.length; i++) {
    let tokens = rooms[i].split(" ");
    let [item, number] = tokens;
    if (item === "potion") {
      let currentHealth = health;
      let totalhealth = health + Number(number);
      if (totalhealth > 100) {
        health = 100;
      }
      else {
          health = totalhealth;
      }
      console.log(`You healed for ${health - currentHealth} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (item === "chest") {
      coins += Number(number);
      console.log(`You found ${number} coins. `);
    } else {
      let monster = item;
      let monsterAttack = Number(number);
      health -= monsterAttack;
      if (health > 0) {
        console.log(`You slayed ${monster}.`);
      } else if (health <= 0) {
        console.log(`You died! Killed by ${monster}.`);
        console.log(`Best room: ${i + 1}`);
        break;
      }
    }
    countRooms++;
  }
  if (countRooms === rooms.length) {
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
  }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
