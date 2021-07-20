function heartDelivery(input) {
  let houses = input.shift().split("@").map(Number);
  let index = 0;
  //обхождаме останалите входни данни за да обработим jump командата
  let line = input.shift();
  while (line != "Love!") {
    //скок със съотвтната стъпка
    let offset = Number(line.split(" ")[1]);

    index += offset;
    //проверяваме дали индекса не е извън обхвата на масива
    if (index > houses.length - 1) {
      index = 0;
    }
    //проверяваме дали в къщата вече има любов
    if (houses[index] === 0) {
      console.log(`Place ${index} already had Valentine's day.`);
    } else {
      //намаляме с две сърца и отново проверяваме дали не е посята любов в къщичката
      houses[index] -= 2;
      if (houses[index] === 0) {
        console.log(`Place ${index} has Valentine's day.`);
      }
    }

    line = input.shift();
  }
  let failed = houses.filter(x => x > 0).length
  console.log(`Cupid's last position was ${index}.`);
  if (failed > 0) {
      console.log(`Cupid has failed ${failed} places.`)
  }
  else {
      console.log(`Mission was successful.`);
  }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
