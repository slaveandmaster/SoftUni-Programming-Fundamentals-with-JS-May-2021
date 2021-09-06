function needForSpeed(input) {
    let cars = {};
    let n = Number(input.shift());
    let carArray = input.slice(n);
    let actions = {
        Drive,
        Refuel,
        Revert
    }

    for (let index = 0; index < n; index++) {
        const element = input[index];
        let [ car, distance, fuel ] = element.split('|');
        cars[car] = {
            distance: Number(distance),
            fuel: Number(fuel)
        }
    }

    while (carArray[0] != "Stop") {
         let tokens = carArray.shift().split(' : ');
         let [ command, car, ...params ] = tokens;
         actions[command](car, ...params);

    }
    //output sorted array
    let sorted = Object.entries(cars).sort((a,b)=> {
        let [ carA , distanceA ] = a;
        let [ carB , distanceB ] = b;
        return distanceB.distance - distanceA.distance || carA.localeCompare(carB);
    })
    for (const [ car , props ] of sorted) {
        console.log(`${car} -> Mileage: ${props.distance} kms, Fuel in the tank: ${props.fuel} lt.`);
    }
    //alter functions
    function Drive(car , dist, neededFuel) {
            let currentFuel = cars[car].fuel;
            if (currentFuel > Number(neededFuel)) {
                cars[car].distance += Number(dist);
                cars[car].fuel -= neededFuel;
                console.log(`${car} driven for ${dist} kilometers. ${neededFuel} liters of fuel consumed.`)
            }
            else {
                console.log(`Not enough fuel to make that ride`);
            }
            if (cars[car].distance >= 100000) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }
    }
    function Refuel(car , fuel) {
        let currentFuel = cars[car].fuel;
        let totalFuel = currentFuel + Number(fuel);
        if (totalFuel >= 75) {
            cars[car].fuel = 75;
            let usedFuel = 75 - currentFuel;
            console.log(`${car} refueled with ${usedFuel} liters`);
        }
        else {
            cars[car].fuel = totalFuel;
            console.log(`${car} refueled with ${fuel} liters`);
        }
    }
    function Revert(car , kilometers) {
        cars[car].distance -= Number(kilometers);
        
        if (cars[car].distance < 10000) {
            cars[car].distance = 10000;
        }
        else {
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
console.log(`================================`);
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )