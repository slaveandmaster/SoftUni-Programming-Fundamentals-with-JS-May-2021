function solve(input) {
  let pattern =
    /@(?<planet>[A-Za-z]+)([^@\-!:>])*:(?<population>[\d]+)([^@\-!:>])*!(?<attack>[AD])!([^@\-!:>])*\->(?<soldiers>[\d]+)([^@\-!:>])*/;
  let attackedPlanet = [];
  let destroyedPlanet = [];
  let keyPattern = /[star]/gi;
  let count = Number(input.shift());
  for (let index = 0; index < count; index++) {
      let key = input[index].match(keyPattern) && input[index].match(keyPattern).length;
      let decryptedMsg = [];
    for (const char of input[index]) {
      let symbol = char.charCodeAt(0);
      symbol -= Number(key);
      let newChar = String.fromCharCode(symbol);
      decryptedMsg.push(newChar);
    }
    decryptedMsg = decryptedMsg.join("");
    decryptedMsg = pattern.exec(decryptedMsg);
    //console.log(decryptedMsg);
    if (decryptedMsg) {
        if (decryptedMsg.groups.attack === 'A') {
            attackedPlanet.push(decryptedMsg.groups.planet);
        }
        else {
            destroyedPlanet.push(decryptedMsg.groups.planet);
        }
    }
  }
  let sortedPlanets = attackedPlanet.sort((a,b) => a.localeCompare(b));
  let sortDestroyedPlanet = destroyedPlanet.sort((a,b) => a.localeCompare(b));
  console.log(`Attacked planets: ${attackedPlanet.length}`);
  for (const planet of sortedPlanets) {
      console.log(`-> ${planet}`);
  }
  console.log(`Destroyed planets: ${destroyedPlanet.length}`);
  sortDestroyedPlanet.forEach(p => console.log(`-> ${p}`));
}
solve(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
solve(["3", "tt(''DGsvywgerx>6444444444%H%1B9444",
"GQhrr|A977777(H(TTTT", "EHfsytsnhf?8555&I&2C9555SR"]
)
