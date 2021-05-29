function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
    let expenses = 0;
    let brokens = 0;
  //     •	First parameter – lost fights count – integer in the range [0, 1000].
  // •	Second parameter – helmet price - floating point number in range [0, 1000].
  // •	Third parameter – sword price - floating point number in range [0, 1000].
  // •	Fourth parameter – shield price - floating point number in range [0, 1000].
  // •	Fifth parameter – armor price - floating point number in range [0, 1000].

  //     •	Every second lost game, his helmet is broken.
  // •	Every third lost game, his sword is broken.
  // •	When both his sword and helmet are broken in the same lost fight, his shield also brakes.
  // •	Every second time, when his shield brakes, his armour also needs to be repaired.
  // You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment.
for (let i = 1; i <= lostFights; i++) {
    //проверка за всяка втора игра при която шлема е счупен
    if (i % 2 === 0) {
        expenses += helmetPrice;
    }    
    if (i % 3 === 0) {
        expenses+=swordPrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
        expenses += shieldPrice;
        brokens++;
        
    }
    if (brokens == 2) {
      expenses+=armorPrice;
      brokens = 0;
  }
}
  // •	As output you must print Peter`s total expenses for new equipment: "Gladiator expenses: {expenses} aureus"
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
