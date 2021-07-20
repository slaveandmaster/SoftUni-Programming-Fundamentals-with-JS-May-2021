function cardGame(input) {
  //създаване на масив за точките съоветстващи на всяка една карта
  power = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  //създаване на масив с типовете карти
  cardType = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  //console.log(power);
  let players = new Map();
  let result = {};
  //обхождане на входните данни и съставяне на масив от играчи и карктите,които държат
  for (let line of input) {
    let [player, cards] = line.split(": ");
    if (!players.has(player)) {
      players.set(player, []);
    }
    let card = cards.split(", ");
    let currentCards = players.get(player);
    //при добаваня махаме дублираните карти
    currentCards.push(...new Set(card));
  }
  for (let [player, playerCards] of Array.from(players)) {
    let sum = 0;
    let name = player;
    //обработка на картите и сумиране на точките
    // прилагаме сет за да махнем дублирани карти от всички раздавания
    let card = [...new Set(playerCards)];
    for (let item of card) {
      if (item.length == 2) {
        let [cardPower, typeCard] = item.split("");
        sum += Number(power[cardPower]) * Number(cardType[typeCard]);
        //проверка за карта с по-голяма дължин -> 10S
      } else {
        let [cardPower, number, typeCard] = item.split("");
        let fullNumber = cardPower + number;
        sum += Number(fullNumber) * Number(cardType[typeCard]);
      }
    }
    //добавяне на точките за даден играч в отделен масив
    if (!result.hasOwnProperty(name)) {
      result[name] = sum;
    } else {
      let currentSum = result[name] + sum;
      result[name] = currentSum;
    }
  }

  //отпечатване на резултата във формат {person}: ${points}
  for (const key in result) {
    console.log(`${key}: ${result[key]}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
