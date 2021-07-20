function numbers(input) {
    let numbers = input.split(' ').map(Number);
    let result = [];
    let average = numbers.reduce((acc,current) => acc + current,0) / numbers.length;
    for (let number of numbers) {
        if (number > average) {
            result.push(number);
        }
    }


    //print top 5 numbers that are greater than average value in sequnce
    if(result.length == 0) {
        console.log("No");
    }
    else {
        result.sort((a,b) => b -a );
        console.log(result.slice(0,5).join(' '));
    }
}
numbers("10 20 30 40 50");
numbers(['5', '2', '3', '4', '-10', '30', '40', '50', '20', '50', '60', '60', '51'])
