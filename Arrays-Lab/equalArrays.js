function equalArrays(arr, arrSecond) {
    let arrOne = arr.map(Number);
    let arrTwo = arrSecond.map(Number);
    let sum = 0;
    let isEqual = true;
    //обхождаме елементите в масивите и ги сравняваме
    //сумираме
    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] === arrTwo[i]) {
            sum += arrOne[i];
        }else {
            isEqual = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
        
    }
    // 'Arrays are identical. Sum: {sum}'
    if (isEqual === true) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
    
    //при откриването на първия различен елемент запазваме неговата стойност и излизаме от цикъла

     // 'Arrays are not identical. Found difference at {index} index'.
}
equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);