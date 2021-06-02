function factorialDivision(numberOne, numberTwo) {
    let calcFactorial = (num) => {
        let sum = 1;
        while (num > 0) {
            sum *= num;
            num--;
        }
        return sum;
    }
    let firstFactorial = calcFactorial(numberOne);
    let secondFactorial = calcFactorial(numberTwo);
    console.log((firstFactorial / secondFactorial).toFixed(2));

    // function recursionFac(num) {
    //     if (num === 0) {
    //         return 1;
    //     }
    //     else {
    //      return   num * recursionFac(num - 1);
    //     }
    // }
    
}
factorialDivision(5,2);
factorialDivision(6,2);