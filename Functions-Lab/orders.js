function orders(product, quantity) {
    let totalPrice = 0;
  switch (product) {
    case "water":
        totalPrice = 1 * quantity;
      break;
    case "coffee":
        totalPrice = 1.5 * quantity;
      break;
    case "coke":
        totalPrice = 1.4 * quantity;
      break;
    case "snacks":
        totalPrice = 2 * quantity;
      break;
    default:
      break;
  }
  console.log(totalPrice.toFixed(2));
}
orders("water", 5);
orders("coffee", 2);
