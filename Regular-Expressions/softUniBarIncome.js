function solve(input) {
  let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/;
  let income = 0;
  while (input[0] != "end of shift") {
    let line = input.shift();
    let match = line.match(pattern);
    if (match != null) {
      let [_, name, product, qty, price] = match;
      qty = Number(qty);
      price = Number(price);
      console.log(`${name}: ${product} - ${(qty * price).toFixed(2)}`);
      income += qty * price;
    }
  }

  console.log(`Total income: ${income.toFixed(2)}`);
}
// solve(["%George%<Croissant>|2|10.3$",
// "%Peter%<Gum>|1|1.3$",
// "%Maria%<Cola>|1|2.4$",
// "end of shift"]
// )
solve([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
