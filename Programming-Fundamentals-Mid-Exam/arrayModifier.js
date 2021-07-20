function arrayModifier(numbers) {
  //initial array of numbers
  let numbs = numbers.shift().split(" ").map(Number);
  //loop through array until "end" command
  let line = numbers.shift();
  while (line != "end") {
    let [command, firstIndex, secondIndex] = line.split(" ");
    switch (command) {
      case "swap":
          swap(firstIndex, secondIndex);
        break;
      case "multiply":
          multiply(firstIndex,secondIndex);
        break;
      case "decrease":
          decrease(numbs);
        break;
      default:
        break;
    }

    line = numbers.shift();
  }
  //implement commands swap,multiply and decrease
  //swap index1 index2 . take two elements and swap their places.
  function swap(firstIndex, secondIndex) {
    let tmp = numbs[firstIndex];
    numbs[firstIndex] = numbs[secondIndex];
    numbs[secondIndex] = tmp;
  }
  //multiply index1 index2 , take element at the 1st index and multiply it with 2nd element index,
  //and save product in 1st index
  function multiply(firstIndex, secondIndex) {
    let product = numbs[firstIndex] * numbs[secondIndex];
    numbs[firstIndex] = product;
  }
  //decrease all element with 1
  function decrease() {
   let newArr =  numbs.map((x) => x = x - 1);
   numbs = newArr;
  }
  //output array with comma separate and space ", "
  console.log(numbs.join(", "));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
