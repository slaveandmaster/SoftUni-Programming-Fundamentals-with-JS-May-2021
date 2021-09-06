function solve(input) {
  let guestList = {};
  let unliked = 0;
  let actions = {
    Like,
    Unlike,
  };
  let line = input.shift();
  while (line != "Stop") {
    let tokens = line.split("-");
    let [commands, name, param] = tokens;
    actions[commands](name, param);
    line = input.shift();
  }

 let sorted = Object.entries(guestList).sort((a,b) => {
     let [ nameA, objA] = a;
     let [ nameB, objB ] = b;
     return objB.length - objA.length || nameA.localeCompare(nameB);
 })
 for (const [item, obj] of sorted) {
     console.log(`${item}: ${obj.join(', ')}`);
    }
    console.log(`Unliked meals: ${unliked}`);
  function Like(guest, product) {
    if (!guestList.hasOwnProperty(guest)) {
      guestList[guest] = [];
      guestList[guest].push(product);
    } else if((isValid = guestList[guest].includes(product)) == false){
      guestList[guest].push(product);
    }
  }
  function Unlike(guest, product) {
    if (!guestList.hasOwnProperty(guest)) {
      console.log(`${guest} is not at the party.`);
    } else if ((isValid = guestList[guest].includes(product)) == false) {
      console.log(
        `${guest} doesn't have the ${product} in his/her collection.`
      );
    } else {
      let currentArray = guestList[guest];
      let idx = guestList[guest].indexOf(product);
      let newArr = currentArray.splice(idx, 1);
      guestList[guest] = currentArray;
      unliked++;
      console.log(
        `${guest} doesn't like the ${product}.`
      );
    }
  }
}
solve([
  "Like-Krisi-shrimps",
  "Like-Krisi-shrimps",
  "Like-Krisi-soup",
  "Like-Penelope-dessert",
  "Like-Misho-salad",
  "Stop",
]);
console.log(`========================`);
solve(["Like-Krisi-shrimps", "Unlike-Vili-carp", "Unlike-Krisi-salad", "Stop"]);
console.log(`========================`);
solve(["Like-Katy-fish", "Unlike-Katy-fish", "Stop"]);
