function flightSchedule(input) {
let flights = input[0];
let flightsStatus = input[1];
let currentStatus = input[2];
//създаваме обект за полетите в който ще има номер на полета и дестинацията
let onFly = {};
flights.forEach((flight) => {
    let [flightNumber, destination ] = flight.split(' ');
    onFly[flightNumber] = {
        "Destination": destination,
        "Status": 'Ready to fly'
    }
})
//проверяваме за всеки полет дали има промяна в статуса си  и ако да я сменяме
flightsStatus.forEach((fly) => {
    let [ flightNumber, status ] = fly.split(' ');
    if (onFly.hasOwnProperty(flightNumber)) {
        onFly[flightNumber].Status = status;
    }
})
//извеждаме на екрана всички полети със Стастус подаден от третия масив
for (const key in onFly) {
    if (onFly[key].Status === currentStatus[0]) {
        console.log(onFly[key]);
        
    }
}
}
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)