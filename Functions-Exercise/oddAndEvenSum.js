function oddAndEvenSum(number) {
    let num = number.toString().split('').map(Number);
    let evenSum = 0;
    let oddSum = 0;
    for (let index = 0; index < num.length; index++) {
        if (num[index] % 2 === 0) {
            evenSum += num[index];
        }
        else {
            oddSum += num[index];
        }
        
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);