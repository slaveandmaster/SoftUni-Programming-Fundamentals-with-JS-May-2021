function spiceMustFlow(yieldSpice) {
  let yield = yieldSpice;
  let totalAmount = 0;
  let countDays = 0;
  let consumeSpice = 0;
  while (yield >= 100) {
    countDays++;
    consumeSpice = yield - 26;
    totalAmount += consumeSpice;
    yield -= 10;
  }
  totalAmount = totalAmount - 26;
  if (totalAmount <= 0) {
    totalAmount = 0;
  }
  console.log(`${countDays}`);
  console.log(totalAmount);
}
spiceMustFlow(111);
spiceMustFlow(100);
spiceMustFlow(101);
spiceMustFlow(90);
