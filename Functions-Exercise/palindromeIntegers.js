function palindromeIntegers(input) {
    input = input.map(String);
    for (let index = 0; index < input.length; index++) {
        if (input[index] === input[index].split('').reverse().join('')) {
            console.log('true');
        }
        else {
            console.log('false');
        }
        
    }
}
palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);