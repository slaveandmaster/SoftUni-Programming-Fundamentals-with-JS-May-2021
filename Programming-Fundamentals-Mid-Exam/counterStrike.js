function counterStrike(input) {
    let energy = Number(input.shift());
    let wins = 0;
    let line = input.shift();
    while (line != "End of battle") {
        if (energy < line) {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            break;
        }    
        energy -=Number(line);
        wins++;
        if (wins % 3 == 0) {
        energy += wins;
        }
        line = input.shift();
    }
    if (line == "End of battle") {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`)
    }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
