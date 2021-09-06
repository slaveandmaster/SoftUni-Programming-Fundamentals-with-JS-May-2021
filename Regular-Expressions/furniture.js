function solve(input) {
  //">>{furniture name}<<{price}!{quantity}"
  let furniture = [];
  let total = 0;
  let pattern =/>>(?<product>[A-Za-z]+)<<(?<price>\d+(?:\.?\d*))!(?<qty>\d+)/;

  while (input[0] != "Purchase") {
    let line = input.shift();
    let match = pattern.exec(line);
    if (match != null) {
      let { product, price, qty } = match.groups;
      price = Number(price);
      quantity = Number(qty);
      total += price * quantity;
      furniture.push(product);
    }
  }
  console.log(`Bought furniture:`);
  if (furniture.length > 0) {
    for (const item of furniture) {
      console.log(item);
    }
  }
  console.log(`Total money spend: ${total.toFixed(2)}`);
}
solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
