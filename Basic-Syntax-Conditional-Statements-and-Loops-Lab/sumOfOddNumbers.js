function sumOfOddNumbers(input) {
  const end = Number(input);
  let sum = 0;
  let count = 0;
  for (let i = 1; count < end; count++, i += 2) {
    console.log(i);
    sum += i;
  }
  console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
sumOfOddNumbers(3);
