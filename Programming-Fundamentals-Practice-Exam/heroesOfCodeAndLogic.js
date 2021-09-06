function heroesOfCodeAndLogic(input) {
  let n = Number(input.shift());
  let arr = input.slice(n);
  let heroes = {};
  //object with all operation
  actions = {
    CastSpell,
    TakeDamage,
    Recharge,
    Heal,
  };
  for (let index = 0; index < n; index++) {
    //fill object
    let [hero, heal, mana] = input[index].split(" ");
    heroes[hero] = {
      heal: Number(heal),
      mana: Number(mana),
    };
  }

  let line = arr.shift();
  while (line != "End") {
    let [command, name, ...params] = line.split(" - ");
    actions[command](name, params);
    line = arr.shift();
  }
  //output result sorted by their HP in descending order, then by their name in ascending order,
  let sorted = Object.entries(heroes).sort((a, b) => {
    let [nameA, objA] = a;
    let [nameB, objB] = b;
    return objB.heal - objA.heal || nameA.localeCompare(nameB);
  });

  for (const [name, obj] of sorted) {
    console.log(`${name}`);
    console.log(` HP: ${obj.heal}`);
    console.log(` MP: ${obj.mana}`);
  }

  // create all functions
  function CastSpell(heroName, [MP, spell]) {
    let currentMana = heroes[heroName].mana;
    if (currentMana >= MP) {
      heroes[heroName].mana -= Number(MP);
      console.log(
        `${heroName} has successfully cast ${spell} and now has ${heroes[heroName].mana} MP!`
      );
    } else {
      console.log(`${heroName} does not have enough MP to cast ${spell}!`);
    }
  }

  function TakeDamage(heroName, [damage, attacker]) {
    let currentHeal = heroes[heroName].heal;
    let calcDamage = currentHeal - Number(damage);
    if (calcDamage > 0) {
      heroes[heroName].heal -= Number(damage);
      console.log(
        `${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].heal} HP left!`
      );
    } else {
      console.log(`${heroName} has been killed by ${attacker}!`);
      delete heroes[heroName];
    }
  }

  function Recharge(heroName, amount) {
    let totalMana = heroes[heroName].mana + Number(amount);
    let currentMana = heroes[heroName].mana;
    if (totalMana > 200) {
      heroes[heroName].mana = 200;
      let usedMana = heroes[heroName].mana - currentMana;
      console.log(`${heroName} recharged for ${usedMana} MP!`);
    } else {
      heroes[heroName].mana = totalMana;
      console.log(`${heroName} recharged for ${amount} MP!`);
    }
  }

  function Heal(heroName, amount) {
    let totalHeal = heroes[heroName].heal + Number(amount);
    let currentHeal = heroes[heroName].heal;
    if (totalHeal > 100) {
      heroes[heroName].heal = 100;
      let usedHeal = heroes[heroName].heal - currentHeal;
      console.log(`${heroName} healed for ${usedHeal} HP!`);
    } else {
      heroes[heroName].heal = totalHeal;
      console.log(`${heroName} healed for ${amount} HP!`);
    }
  }
}
heroesOfCodeAndLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
heroesOfCodeAndLogic([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
