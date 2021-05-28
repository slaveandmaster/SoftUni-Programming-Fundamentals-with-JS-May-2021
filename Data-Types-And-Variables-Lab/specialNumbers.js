function specialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    num = i.toString().length;
    let lastDigit = i % 10;
    while (num > 0) {
      sum += Number(lastDigit);
      lastDigit = parseInt(i / 10);
      num--;
    }

    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} True`);
    } else {
      console.log(`${i} False`);
    }
  }
}
specialNumbers(15);
