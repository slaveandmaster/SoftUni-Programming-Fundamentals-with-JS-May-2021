function printNthElement(input) {
    let step = Number(input.pop());
    let result = '';
    for (let index = 0; index < input.length; index+=step) {
        result += input[index] + ' ';
        
    }
    console.log(result);
}
printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);