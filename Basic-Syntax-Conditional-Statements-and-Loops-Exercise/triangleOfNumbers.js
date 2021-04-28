function triangleOfNumbers(input) {
    let end = Number(input);
    for (let i = 1; i <= end; i++) {
        console.log(`${i} `.repeat(i));
        
    }
}
triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);