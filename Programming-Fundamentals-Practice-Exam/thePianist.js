function thePianist(input) {
  let pieces = Number(input.shift());
  let arrCopy = input.slice(pieces);
  let piecs = {};
  let actions = {
    Add,
    Remove,
    ChangeKey,
  };
  //fill assoc array
  for (let index = 0; index < pieces; index++) {
    let [name, composer, key] = input[index].split("|");
    piecs[name] = {
      composer,
      key,
    };
  }
  //console.log(piecs);
  //iterate through array and get commands
  while (arrCopy[0] != "Stop") {
    let tokens = arrCopy.shift().split("|");
    let [command, ...params] = tokens;
    actions[command](params);
  }
  //output sorted
  let sorted = Object.entries(piecs).sort((a,b) => {
      let [ nameA, objA ] = a;
      let [ nameB, objB ] = b;
    return nameA.localeCompare(nameB) || objA[1].composer.localeCompare(objB[1].composer);
  });
  for (const [item, itemProperty] of sorted) {
    console.log(`${item} -> Composer: ${itemProperty.composer}, Key: ${itemProperty.key}`);   
  }

  //alter functions
  function Add([name, composer, key]) {
    if (piecs.hasOwnProperty(name)) {
      console.log(`${name} is already in the collection!`);
    } else {
      piecs[name] = { composer, key };
      console.log(`${name} by ${composer} in ${key} added to the collection!`);
    }
  }
  function Remove(name) {
    if (piecs.hasOwnProperty(name)) {
      delete piecs[name];
      console.log(`Successfully removed ${name}!`);
    } else {
      console.log(
        `Invalid operation! ${name} does not exist in the collection.`
      );
    }
  }
  function ChangeKey([name, newKey]) {
    if (piecs.hasOwnProperty(name)) {
      piecs[name].key = newKey;
      console.log(`Changed the key of ${name} to ${newKey}!`);
    } else {
      console.log(
        `Invalid operation! ${name} does not exist in the collection.`
      );
    }
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
thePianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
