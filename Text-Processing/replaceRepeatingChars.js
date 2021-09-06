function solve(text) {
    let result = '';
    for (let index = 1; index <= text.length; index++) {
        if (text[index - 1] != text[index]) {
            result += text[index - 1];
        }
        
    }
    console.log(result);
}
solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');