function computerStore(input) {
  let command = input.pop();
  let prices = input.map(Number);
  let sum = 0;
  for (let number of prices) {
    if (number < 0) {
      console.log(`Invalid price!`);
    } else {
      sum += number;
    }
  }
  if (sum == 0) {
    console.log(`Invalid order!`);
  } else {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    let tax = sum * 0.2;
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    let totalCost = sum + tax;
    console.log(`-----------`);
    if (command == "special") {
      totalCost = totalCost - (totalCost * 10) / 100;
    }
    console.log(`Total price: ${totalCost.toFixed(2)}$`);
  }
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "Regular",
]);
computerStore(["regular"]);
