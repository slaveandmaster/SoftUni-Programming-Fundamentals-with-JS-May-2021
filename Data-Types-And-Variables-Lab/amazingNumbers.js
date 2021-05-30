function amazingNumbers(num) {
  let numbers = num.toString().split("").map(Number);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  if (sum.toString().includes(9)) {
      console.log(`${Number(numbers.join(''))} Amazing? True`);
  }
  else {
      console.log(`${Number(numbers.join(''))} Amazing? False`);
  }
}
amazingNumbers(1233);
amazingNumbers(999);
