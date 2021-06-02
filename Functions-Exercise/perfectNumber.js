function perfectNumber(number) {
    let checkPrime = (num) => {
        let sum = 0
        for (let i = 1; i <= num / 2; i++) {
            if (num%i === 0) {
                sum += i;
            }
            
        }
        return sum;
    }
    let isPerfect = checkPrime(number);
    if (isPerfect === number && isPerfect !== 0) {
        return console.log(`We have a perfect number!`);
    }
    else {
       return console.log(`It's not so perfect.`)
    }
    
}

perfectNumber(6);
perfectNumber(1236498);
perfectNumber(28);