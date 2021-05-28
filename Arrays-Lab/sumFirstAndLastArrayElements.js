function sumFirstAndLastArrayElements(input) {
    const firstElement = input[0];
    const lastElement = input[input.length - 1];
    let sum = firstElement + lastElement;
    console.log(sum);
}
sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);