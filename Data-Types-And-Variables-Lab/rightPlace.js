function rightPlace(word, replaceWith, secondWord) {
    let firstWord = word;
    firstWord = firstWord.replace('_',replaceWith);
    //проверка за съвпдаение на думите
    if (firstWord === secondWord) {
        console.log(`Matched`);
    }else {
        console.log(`Not Matched`);
    }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');