function triplesOfLatinLetters(n) {
    let end = Number(n);
    for (let i = 97; i < 97 + end; i++) {
        let firstChar = String.fromCharCode(i);
        for (let j = 97; j < 97 + end; j++) {
            let secondChar = String.fromCharCode(j);
            for (let k = 97; k < 97 + end; k++) {
                let thirdChar = String.fromCharCode(k);
                console.log(`${firstChar}${secondChar}${thirdChar}`);
            }
        }
    }
}
triplesOfLatinLetters(3);
