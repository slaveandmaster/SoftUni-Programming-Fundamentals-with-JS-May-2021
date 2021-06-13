function carWash(arr) {
  let total = 0;
  function wash(cmd) {
    switch (cmd) {
      case "soap":
        total += 10;
        break;
      case "water":
        total += total * 0.2;
        break;
      case "vacuum cleaner":
        total += total * 0.25;
        break;
      case "mud":
        total = total - total * 0.1;
        break;
      default:
        break;
    }
  }
  let command;
  while ((command = arr.shift())) {
    wash(command);
  }
  console.log(`The car is ${total.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
