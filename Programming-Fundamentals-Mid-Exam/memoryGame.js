function memoryGame(input) {
  //get sequence and convert every element to number
  let sequence = input.shift().split(" ");
  //iterate through array and get indexes
  let line = "";
  let move = 0;
  while ((line = input.shift()) != "end") {
    move++;
    let [indexOne, indexTwo] = line.split(" ").map(Number);
    //if player try cheating or indexes is out of range -> add elements in the middles of sequence
    if (
      indexOne < 0 ||
      indexTwo < 0 ||
      indexOne >= sequence.length ||
      indexTwo >= sequence.length ||
      indexOne == indexTwo
    ) {
      let element = "-" + move + "a";
      sequence.splice(sequence.length / 2, 0, element, element);
      console.log(`Invalid input! Adding additional elements to the board`);
    }
    //if player hit tow matching elements -> remove them from sequence
    else if (sequence[indexOne] == sequence[indexTwo]) {
      let el = sequence[indexOne];
      let max = Math.max(indexOne, indexTwo);
      let min = Math.min(indexOne, indexTwo);
      sequence.splice(max, 1);
      sequence.splice(min, 1);
      console.log(`Congrats! You have found matching elements - ${el}!`);
    }
    //if player hit two different elements -> try again later
    else {
      console.log(`Try again!`);
    }
    //if player hit all matching elements before receives "end" command  -> type you have youn in ....
    if (sequence.length == 0) {
      console.log(`You have won in ${move} turns!`);
      break;
    }
  }

  //if player receives "end" before he hits all matching elements -> Sorry you lose
  if (sequence.length > 0) {
    console.log(`Sorry you lose :(`);
    console.log(sequence.join(" "));
  }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
