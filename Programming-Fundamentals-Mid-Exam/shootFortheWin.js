function shootFortheWin(input) {
  let numberSequence = input.shift().split(" ").map(Number);
  let line = input.shift();
  let counter = 0;
  let result = [];
  while (line != "End") {
    let index = Number(line);
    //check if element with index is exist in array
    if (index <= numberSequence.length - 1) {
      let element = numberSequence[index];
      numberSequence[index] = -1;
      for (let key of Object.keys(numberSequence)) {
        let idx = Number(key);
        if (
          numberSequence[idx] > element &&
          index != idx &&
          numberSequence[idx] != -1
        ) {
          numberSequence[idx] -= element;
        } else if (index != idx && numberSequence[idx] != -1) {
          numberSequence[idx] += element;
        }
      }
      counter++;
    }
    line = input.shift();
  }

  // if exist change value to -1 and then reduce all other targets.
  //recuce all targets which have greaster value than current target ,with its value;
  //All the targets, which have less than or equal value to the shot target, you need to increase with its value
  //Keep in mind that you can't shoot a target, which is already shot.
  //You also can't increase or reduce a target, which is considered shot.
  //When you receive the "End" command, print the targets in their current state and the count of shot targets in the following format:

  console.log(`Shot targets: ${counter} -> ${numberSequence.join(" ")}`);
}
shootFortheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootFortheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
