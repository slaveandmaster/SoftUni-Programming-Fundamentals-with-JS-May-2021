function storage(input) {
  let products = {};
  for (let line of input) {
    let [product, qty] = line.split(" ");
    if (!products.hasOwnProperty(product)) {
      products[product] = Number(qty);
    }
    else {

        products[product] += Number(qty);
    }
  }
  for (const key in products) {
    console.log(`${key} -> ${products[key]}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
