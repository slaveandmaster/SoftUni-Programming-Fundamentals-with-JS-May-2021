function mathPower(number, power) {
    result = number;
    for (let index = 1; index < power; index++) {
        result = result * number;
       
    }
    console.log(result);
}
mathPower(2,8);
mathPower(3,4);