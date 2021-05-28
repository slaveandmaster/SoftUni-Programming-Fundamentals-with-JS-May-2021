function arrayRotaion(input,rotate) {
    //първия елемент отива в края
    for (let i = 0; i < rotate; i++) {
        input.push(input.shift());
        
    }
    console.log(input.join(' '));
}
//arrayRotaion([51, 47, 32, 61, 21], 2); //32 61 21 51 47
//arrayRotaion([32, 21, 61, 1], 4); // 32 21 61 1
arrayRotaion([2, 4, 15, 31], 5); // 4 15 31 2