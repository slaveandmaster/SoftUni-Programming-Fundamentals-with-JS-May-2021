function muOnline(input) {
  let health = 100;
  let bitcoins = 0;
  let rooms = input.split("|");
  let roomCounter = 0;
  for (let item of rooms) {
    roomCounter++;
    let [cmd, value] = item.split(" ");
    if (cmd === "potion") {
      potion(value);
    } else if (cmd === "chest") {
      chest(value);
    } else {
      health -= value;
      if (health <= 0) {
        console.log(`You died! Killed by ${cmd}.`);
        console.log(`Best room: ${roomCounter}`);
        break;
      } else {
        console.log(`You slayed ${cmd}.`);
      }
    }
    if (roomCounter == rooms.length) {
      console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
    }
  }
  //commands
  //     •	"potion"
  function potion(heal) {
    if (Number(heal) + health >= 100) {
      console.log(`You healed for ${100 - health} hp.`);
      health = 100;
      console.log(`Current health: ${health} hp.`);
    } else {
      health += Number(heal);
      console.log(`You healed for ${heal} hp.`);
      console.log(`Current health: ${health} hp.`);
    }
  }
  function chest(coins) {
    bitcoins += Number(coins);
    console.log(`You found ${coins} bitcoins.`);
  }
  
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
