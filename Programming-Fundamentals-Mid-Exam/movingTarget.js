function movingTarget(input) {
  let numberSequence = input.shift().split(" ").map(Number);
  let line = input.shift();
  let shoot = (idx, power) => {
    idx = Number(idx);
    if (idx >= 0 && idx < numberSequence.length) {
      idx = Number(idx);
      power = Number(power);
      numberSequence[idx] -= power;
      if (numberSequence[idx] <= 0) {
        numberSequence.splice(idx, 1);
      }
    }
  };
  let strike = (idx, radius) => {
    idx = Number(idx);
    radius = Number(radius);

    if (idx - radius >= 0 && idx + radius <= numberSequence.length) {
      let prevElement = idx - radius;

      numberSequence.splice(prevElement, radius * 2 + 1);
    } else {
      console.log(`Strike missed!`);
    }
  };
  let add = (idx, item) => {
    if (idx >= 0 && idx < numberSequence.length) {
      numberSequence.splice(idx, 0, item);
    } else {
      console.log(`Invalid placement!`);
    }
  };
  //iterate through commands and execute
  while (line != "End") {
    let [command, index, power] = line.split(" ");

    switch (command) {
      case "Shoot":
        shoot(index, power);
        break;
      case "Add":
        add(index, power);
        break;
      case "Strike":
        strike(index, power);
        break;
      default:
        break;
    }

    line = input.shift();
  }

  console.log(numberSequence.join("|"));
}
movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
