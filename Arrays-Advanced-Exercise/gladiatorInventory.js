function gladiatorInventory(arr) {
  let inventory = arr.shift().split(" ");
  let buy = (equipment) => {
    inventory.push(equipment);
  };
  let trash = (equipment) => {
    let idx = inventory.indexOf(equipment);
    inventory.splice(idx, 1);
  };
  let repair = (equipment) => {
    let idx = inventory.indexOf(equipment);
    inventory.push(inventory.splice(idx, 1));
  };
  let upgrade = (equipment) => {
    let currEquipment = equipment.split("-")[0];
    let idx = inventory.indexOf(currEquipment);
    // let newItem = inventory[idx] + ":" + equipment;
    let newItem = equipment.replace("-", ":");
    inventory.splice(idx + 1, 0, newItem);
  };
  //  You may receive the following commands:
  // •	Buy {equipment}
  // •	Trash {equipment}
  // •	Repair {equipment}
  // •	Upgrade {equipment}-{upgrade}
  // If you receive Buy command, you should add the equipment at last position in the inventory, but only if it isn't bought already.
  // If you receive Trash command, delete the equipment if it exists.
  // If you receive Repair command, you should repair the equipment if it exists and place it on last position.
  // If you receive Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}";

  let cmd;
  while ((cmd = arr.shift())) {
    let [command, item] = cmd.split(" ");
    switch (command) {
      case "Buy":
        if (!inventory.includes(item)) {
          buy(item);
        }

        break;
      case "Trash":
        if (inventory.includes(item)) {
          trash(item);
        }
        break;
      case "Repair":
        if (inventory.includes(item)) {
          repair(item);
        }

        break;
      case "Upgrade":
        let extension = item.split("-")[0];
        if (inventory.includes(extension)) {
          upgrade(item);
        }

        break;
      default:
        break;
    }
  }
  console.log(inventory.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
