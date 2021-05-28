function mergeArrays(firstArr, secondArr) {
    let newArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            const element = Number(firstArr[i]);
            const secondElement = Number(secondArr[i]);
            newArr.push(element + secondElement);
        }
        else {
            newArr.push(firstArr[i]+secondArr[i]);
        }
        
    }
    console.log(newArr.join(' - '));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
