function sumDigits(digits) {
    let numbers = digits.toString().split('').map(Number);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        
    }
    console.log(`${sum}`);
}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)