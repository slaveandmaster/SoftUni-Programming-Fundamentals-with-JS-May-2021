function solve(input) {
    let budget = Number(input.shift());
    let students = Number(input.shift());
    let packageFloorPrice = Number(input.shift());
    let eggPrice = Number(input.shift());
    let priceSingelApron =  Number(input.shift());
    let cost = 0;
    let freePackages = Math.floor(students / 5);
    let additinalAprons = Math.ceil(students + students * 0.2);
    cost = priceSingelApron * additinalAprons + eggPrice * 10 * (students) + packageFloorPrice * (students - freePackages)
    //ако калкулираната сума е по-малко или равна на бюджета
    if (cost <= budget) {
        
        console.log(`Items purchased for ${cost.toFixed(2)}$.`);
    }
    else {
        let neededMoney = Math.abs(budget - cost);
        //ако калкулиранта цена е по-голяма от бюджета
        console.log(`${neededMoney.toFixed(2)}$ more needed.`);
    }
}
solve([50, 2, 1.0, 0.1, 10.0]);

solve([100, 25, 4.0, 1.0, 6.0]);
solve([40, 2, 1.0, 0.1, 10.0]);
