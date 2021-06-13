function negativeOrPositiveNumbers(numbers) {
  let result = [];
  let checkNumber = (n) => {
    if (n >= 0) {
        //positive put on the last position push()
      result.push(n);
    } else if (n < 0) {
        //negative number put front of the array unshift()
      result.unshift(n);
    }
  };
  numbers.forEach((element) => {
    checkNumber(element);
  });
  console.log(result.join("\n"));
}
negativeOrPositiveNumbers([7, -2, 8, 9]);
negativeOrPositiveNumbers([3, -2, 0, -1]);
