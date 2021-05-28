function reverseAnArrayOfNumbers(n, input) {
    // Write a program which receives a number n and an array of elements.
    //  Your task is to create a new array with n numbers,
    //  reverse it and print its elements on a single line, space separated.
    //first variant 
    let numbers = input.slice(0,n).reverse().join(' ');
    console.log(numbers);
    //second variant
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(input[i]);
        
    }
    let result = '';
    for (let j = newArr.length -1; j >= 0; j--) {
        result += newArr[j]+' ';
        
    }
    console.log(result);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);