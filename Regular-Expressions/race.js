function solve(input) {
    let userList = input.shift().split(', ');
    let namePattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;
    let racers = {};
    for (const user of userList) {
        racers[user] = 0;
    }
    while (input[0] != "end of race") {
        let line = input.shift();
        let name = line.match(namePattern).join('');
        let numbers= line.match(digitPattern);
        let distance = numbers.map(Number);
        let totalDistance = 0;
        for (const row of distance) {
         totalDistance += row;
        }
        if (racers[name] != undefined) {
            racers[name] += totalDistance;
        }
        
    }
    let sortedRacers = Object.entries(racers).sort((a,b) => b[1] - a[1]);
    if (sortedRacers[0][0]) {
        console.log(`1st place: ${sortedRacers[0][0]}`);
    }
    if (sortedRacers[1][0]) {
        console.log(`2nd place: ${sortedRacers[1][0]}`);
    }
    if (sortedRacers[1][0]) {
        console.log(`3rd place: ${sortedRacers[2][0]}`);
    }
}
solve(["George, Peter, Bill, Tom",
"G4e@55or%6g6!68e!!@",
"R1@!3a$y4456@",
"B5@i@#123ll",
"G@e54o$r6ge#",
"7P%et^#e5346r",
"T$o553m&6",
"end of race"]
)