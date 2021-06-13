function numberModification(number) {
    let num = number.toString().split('').map(Number);
    let sum = 0;
    let avrSum = 0;
   
    let calc = (a) => {
        return numberSum = a.reduce((acc,cur) => {return acc + cur},0);
    }
    while (true) {
        
        sum = Number(calc(num));
        avrSum = sum / num.length;
        if (avrSum > 5) {
            break;
        }
        num.push(9)
    }
    console.log(num.join(''));
}
numberModification(101);
numberModification(5835)