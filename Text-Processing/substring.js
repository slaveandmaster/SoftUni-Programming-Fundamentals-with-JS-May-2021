function solve(word, text) {
    let isFound = false;
    words = text.split(' ');

    for (const item of words) {
        if (item.toLocaleLowerCase() === word.toLocaleLowerCase()) {
            isFound = true;
            console.log(item.toLocaleLowerCase());
        }
    }
    if (isFound === false) {
        console.log(`${word} not found!`)
    }
}
solve('javascript',
'JavaScript is the best programming language'
)
solve('python',
'JavaScript is the best programming language'
)