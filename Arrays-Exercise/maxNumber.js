function maxNumber(input) {
  let numbers = input;
  max = [];
 
  for (let i = 0; i < numbers.length; i++) {
    let isBigger = true;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] <= numbers[j]) {
        isBigger = false;
        break;
      }
    }
    if (isBigger) {
      max.push(numbers[i]);
    }
  }
  console.log(max.join(' '));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
