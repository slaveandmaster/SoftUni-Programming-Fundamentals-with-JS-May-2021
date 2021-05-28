function nonDecreasingSubsequence(input) {
  let numbers = input.slice(0).map(Number);
  let biggestNumber = numbers[0];
  let result = [];
  result.push(biggestNumber);
  for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];
    if (number >= biggestNumber) {
      biggestNumber = number;
      result.push(biggestNumber);
    }
  }
  console.log(result.join(" "));
}
nonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsequence([1, 2, 3, 4]);
nonDecreasingSubsequence([20, 3, 2, 15, 6, 1]);