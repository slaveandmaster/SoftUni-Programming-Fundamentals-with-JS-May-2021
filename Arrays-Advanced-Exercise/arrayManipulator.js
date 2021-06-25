function arrayManipulator(numbers, commands) {
  // •	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
  // •	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
  // •	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
  // •	remove <index> – removes the element at the specified index.
  // •	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
  // o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
  // •	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
  // o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
  // •	print – stop receiving more commands and print the last state of the array.

  let add = (index, element) => {
    numbers.splice(index, 0, element);
  };
  let addMany = (index, elements) => {
    elements = elements.map(Number);
    //   let idx = elements.shift();
    //   index = idx;
    numbers.splice(index, 0, ...elements);
  };
  let containsEl = (element) => {
    return numbers.indexOf(element);
  };
  let removeEl = (index) => {
    numbers.splice(index, 1);
  };
  let shift = (position) => {
    // let chunk = numbers.splice(0, position);
    // numbers.push(...chunk);
    let end = Number(position);
    for (let index = 0; index < end; index++) {
        let first = numbers.shift();
        numbers.push(first);
      
    }
  };
  let sumPairs = (arr) => {
    arr = arr.map(Number);
    let newArr = arr.reduce((acc,curr,index) => {
      if(index % 2 === 0) {
        acc.push(arr[index] + (arr[index + 1] || 0));
      }
      return acc;
    },[])
//     let newArr = [];
//     for (let index = 0; index < arr.length; index += 2) {
//       let element = arr[index];
//       let nextElement = arr[index + 1] || [];
//       let startIndex = index;
//       let endIndex = index + 1;

//       let sum = element + nextElement;
// newArr.push(sum);
//     }
    numbers = newArr;
  };
  let printData = (arr) => {
    console.log(`[ `+arr.join(', ')+` ]`);
  };
  let cmd;
  while ((cmd = commands.shift())) {
    let [task, ...params] = cmd.split(" ");
    switch (task) {
      case "add":
        add(params[0], Number(params[1]));
        break;
      case "addMany":
        let idx = Number(params.shift());
        addMany(idx, params);
        break;
      case "contains":
        let isFind = containsEl(Number(params[0]));
        console.log(isFind);
        break;
      case "remove":
        removeEl(Number(params[0]));
        break;
      case "shift":
        shift(Number(params[0]));
        break;
      case "sumPairs":
        sumPairs(numbers);
        break;
      case "print":
        printData(numbers);
        break;

      default:
        break;
    }
  }
}
arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
arrayManipulator([2, 2, 4, 2, 4],
  ["add 1 4", "sumPairs", "print"])
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])