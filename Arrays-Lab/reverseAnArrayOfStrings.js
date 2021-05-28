function reverseAnArrayOfStrings(input) {
    //first variant
    let arrStrings = input;
    let copyArr = input.slice(0);
    console.log(copyArr.reverse().join(' '));
    //second variant
    for (let i = 0; i < Math.ceil(arrStrings.length / 2); i++) {
        let temp = arrStrings[arrStrings.length - 1 - i];
        arrStrings[arrStrings.length - 1 - i] = arrStrings[i];
        arrStrings[i] = temp;
        
    }
    console.log(arrStrings.join(' '));
}
reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseAnArrayOfStrings(['33', '123', '0', 'dd']);