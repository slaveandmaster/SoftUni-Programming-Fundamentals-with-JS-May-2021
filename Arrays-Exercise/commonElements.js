function commonElements(arrOne, arrTwo) {
    for (let i = 0; i < arrOne.length; i++) {
        const elementOne = arrOne[i];
        for (let j = 0; j < arrTwo.length; j++) {
            const elementTwo = arrTwo[j];
            if (elementOne === elementTwo) {
                console.log(elementOne);
            }
        }
        
    }
    // //second variant
    // for (let k = 0; k < arrOne.length; k++) {
    //     if (arrTwo.includes(arrOne[k])) {
    //         console.log(arrOne[k]);
    //     }
        
    // }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l']);