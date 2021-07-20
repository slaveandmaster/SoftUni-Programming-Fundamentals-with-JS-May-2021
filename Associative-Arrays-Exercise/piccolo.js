function piccolo(input) {
    let carNumbers = {};
    for (let line of input) {
        let [ entry, number ] = line.split(', ');
        if (entry == 'IN') {
            carNumbers[number] = entry;
        }
        else if (entry == "OUT") {
            if (carNumbers.hasOwnProperty(number)) {
                delete carNumbers[number];
            }
        }
    }
    let sorted = Object.entries(carNumbers).sort((a,b) => { return a[0].localeCompare(b[0])});
    if (sorted.length == 0) {
        console.log(`Parking Lot is Empty`);
    }
    else {
        sorted.forEach(([number, ]) => console.log(number));
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)