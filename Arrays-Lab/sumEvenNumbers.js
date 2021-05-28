function sumEvenNumbers(input) {
    //first variant
    let numbers = input.map(Number).filter((x) => x % 2 === 0).reduce((acc,currNumber) => { return acc + currNumber},0);
    console.log(numbers);
    //second variant 
    let myNumbers = input;
    let sum = 0;
    for (let i = 0; i < myNumbers.length; i++) {
        const numb = Number(myNumbers[i]);
        if (numb % 2 === 0) {
            sum += numb;
        }
    }
    console.log(sum);

}
sumEvenNumbers(['1','2','3','4','5','6']);
sumEvenNumbers(['3','5','7','9']);
sumEvenNumbers(['2','4','6','8','10']);