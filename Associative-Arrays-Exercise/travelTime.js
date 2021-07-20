function travelTime(input) {
  let orders = {};
  for (let line of input) {
    let [country, town, price] = line.split(" > ");
    if (!orders.hasOwnProperty(country)) {
      orders[country] = {};
    }

    if (!orders[country].hasOwnProperty(town)) {
      orders[country][town] = price;
    }

    let currentPrice = orders[country][town];
    if (price < currentPrice) {
      orders[country][town] = price;
    }
  }
  let output = "";
  let sorted = Object.keys(orders).sort((a, b) => a.localeCompare(b));
  for (let country of sorted) {
    output += country + " -> ";
    let sortedPrice = Object.entries(orders[country]).sort((a, b) => {
      return a[1] - b[1];
    });
    for (let [city, price] of sortedPrice) {
      output += `${city} -> ${price} `;
    }
    output += "\n";
  }
  console.log(output);
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
