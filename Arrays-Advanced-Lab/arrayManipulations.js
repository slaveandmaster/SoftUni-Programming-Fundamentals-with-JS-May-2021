function arrayManipulations(arr) {
  let numbers = arr.shift().split(" ").map(Number);
  // •	Add {number}: add a number to the end of the array
  // •	Remove {number}: remove number from the array
  // •	RemoveAt {index}: removes number at a given index
  // •	Insert {number} {index}: inserts a number at a given index
  let add = (n) => {
    numbers.push(n);
  };
  let remove = (n) => {
    numbers = numbers.filter((el) => el !== n);
  };
  let removeAt = (index) => {
    return numbers.splice(index, 1);
  };
  let insertAt = (n, index) => {
    return numbers.splice(index, 0, n);
  };

  for (let index = 0; index < arr.length; index++) {
      let [cmd, ...params] = arr[index].split(" ");
      switch (cmd) {
        case "Add":
            add(Number(params[0]));
          break;
        case "Remove":
            remove(Number(params[0]));
          break;
        case "RemoveAt":
            removeAt(Number(params[0]));
          break;
        case "Insert":
            insertAt(Number(params[0]),Number(params[1]));
          break;
        default:
          break;
      }
    }
  console.log(numbers.join(' '));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
