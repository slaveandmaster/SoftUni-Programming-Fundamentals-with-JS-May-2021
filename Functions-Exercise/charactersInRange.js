function charactersInRange(letterA, letterB) {
    let start = Math.min(letterA.charCodeAt(0), letterB.charCodeAt(0));
    let end = Math.max(letterA.charCodeAt(0), letterB.charCodeAt(0));
    let result = '';
    //взимаме ascii кода на буквите и определяме с Math.min коя буква е пъврва и начална стъпка на цикъкала
    //въртим цикъл от начален ascii код до съответната граница
    for (let index = start + 1; index < end; index++) {
        //добавяме в стринг всяка буква
        result += String.fromCharCode(index) + ' ';
        
    }
    //отпечатваме резултата
    console.log(result);
}
charactersInRange('a','d');
charactersInRange('#',':');
charactersInRange('C','#');