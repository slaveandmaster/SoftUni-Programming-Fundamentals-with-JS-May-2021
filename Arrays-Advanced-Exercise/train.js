function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = arr.shift();
    for (let index = 0; index < arr.length; index++) {
        let cmd = arr[index];
        if (cmd.includes("Add")) {
            let [ command, number] = cmd.split(' ');
            wagons.push(number);
        }
        else {
            cmd = Number(cmd);
            for (let j = 0; j < wagons.length; j++) {
                
                if (cmd + wagons[j] <= maxCapacity ) {
                    wagons[j] += cmd;
                    break;
                }
                
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);