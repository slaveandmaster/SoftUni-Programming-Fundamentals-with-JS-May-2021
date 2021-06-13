function sumFirstAndLast(arr) {
    let numbers = arr.map(Number);
    console.log(numbers[0] + numbers[numbers.length - 1]);
}
sumFirstAndLast(['20','30','40']);
sumFirstAndLast(['5','10']);