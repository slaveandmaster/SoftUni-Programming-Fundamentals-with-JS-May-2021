function inventory(input) {
  let items = input.shift().split(", ");
  let line = input.shift();

  while (line != "Craft!") {
    let [cmd, value] = line.split(" - ");
    switch (cmd) {
      case "Collect":
        collect(value);
        break;
      case "Drop":
        drop(value);
        break;
      case "Combine Items":
        combine(value);
        break;
      case "Renew":
        renew(value);
        break;
      default:
        break;
    }
    line = input.shift();
  }

  //commands
  //     •	"Collect - {item}" – Receiving this command, you should add the given item in your inventory.
  function collect(item) {
    if (!items.includes(item)) {
      items.push(item);
    }
  }
  //      If the item already exists, you should skip this line.
  // •	"Drop - {item}" – You should remove the item from your inventory, if it exists.
  function drop(item) {
    if (items.includes(item)) {
      let idx = items.indexOf(item);
      items.splice(idx, 1);
    }
  }
  // •	"Combine Items - {oldItem}:{newItem}" – You should check if the old item exists,
  //  if so, add the new item after the old one. Otherwise, ignore the command.
  function combine(item) {
    let [oldItem, newItem] = item.split(":");
    if (items.includes(oldItem)) {
      let idx = items.indexOf(oldItem);
      items.splice(idx + 1, 0, newItem);
    }
  }
  // •	"Renew – {item}" – If the given item exists, you should change its position and put it last in your inventory.
  function renew(item) {
    if (items.includes(item)) {
      let idx = items.indexOf(item);
      items.push(items.splice(idx, 1));
    }
  }

  //output
  console.log(items.join(", "));
}
inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
