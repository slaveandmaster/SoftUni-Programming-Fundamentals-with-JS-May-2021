function aMinerTask(input) {
  let mine = {};
  for (let index = 0; index < input.length; index += 2) {
    let resource = input[index];
    let qty = Number(input[index + 1]);
    if (!mine.hasOwnProperty(resource)) {
      mine[resource] = qty;
    } else {
      mine[resource] += qty;
    }
  }
  for (const key in mine) {
      console.log(`${key} -> ${mine[key]}`);
  }
}
aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);

aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
