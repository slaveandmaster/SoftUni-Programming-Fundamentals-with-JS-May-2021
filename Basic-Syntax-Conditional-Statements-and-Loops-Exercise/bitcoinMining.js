function bitcoinMining(input) {
  let shifts = input.map(Number);
  let money = 0;
  let bitcoin = 0;
  let day = 0;
  for (let i = 0; i < shifts.length; i++) {
    let gold = shifts[i];
    //проверяме дали е трети ден/смяна и премахваме 30%
    //от количството злато
    let tDay = i + 1;
    if (tDay % 3 === 0) {
      gold = gold * 0.7;
    }
    //цена на 1 грам злато - 67.51 lv
    //калкулираме колко пари ще получим за златото
    //и ги добавяме към останалите
    let addMoney = gold * 67.51;
    money += addMoney;
    //проверка дали имаме достатъчно пари за биткоин
    // цена на един биткоин - 11949.16 lv.
    //ако имаме достатъчно пари ->купуваме и пресмятаме
    //остатъка от парите
    //проверяваме дали сме отбелязали първия ден
    //в който сме купили биткоин
    if (money >= 11949.16) {
      bitcoin += Math.floor(money / 11949.16);
      money = money % 11949.16;
      day = day == 0 ? tDay : day;
    }
  }
  //извеждане на броя биткоини ,деня на първия биткоин
  console.log(`Bought bitcoins: ${bitcoin}`);
  if (bitcoin >= 1) {
    console.log(`Day of the first purchased bitcoin: ${day}`);
  }

  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
