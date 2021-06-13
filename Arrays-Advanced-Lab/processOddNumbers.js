function processOddNumbers(numbers) {
    let result = numbers.filter((n,index) => index % 2 !== 0).map(n => n*2).reverse();;
    console.log(result.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);