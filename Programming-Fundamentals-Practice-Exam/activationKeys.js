function activationKeys(input) {
  let key = input.shift();

  actions = {
    Slice: Slice,
    Flip: Flip,
    Contains: Contains,
  };

  while (input[0] != "Generate") {
    let [command, ...params] = input.shift().split(">>>");
    actions[command](params);
  }

  console.log(`Your activation key is: ${key}`);
  function Slice(line) {
    let start = Number(line[0]);
    let end = Number(line[1]);

    let firstPart = key.substring(0, start);
    let middle = key.substring(start, end);
    let lastPart = key.substring(end);
    key = firstPart + lastPart;
    console.log(key);
  }
  function Flip(line) {
    let letterCase = line[0];
    let startIdx = Number(line[1]);
    let endIdx = Number(line[2]);
    if (letterCase == "Upper") {
      let firstPart = key.substring(0, startIdx);
      let newWord = key.substring(startIdx, endIdx).toUpperCase();
      let lastPart = key.substring(endIdx);
        key = firstPart + newWord + lastPart;
        console.log(key);
    } else {
      let firstPart = key.substring(0, startIdx);
      let newWord = key.substring(startIdx, endIdx).toLowerCase();
      let lastPart = key.substring(endIdx);
      key = firstPart + newWord + lastPart;
      console.log(key);
    }
  }
  function Contains(str) {
    let result = key.indexOf(str);
    if (result > -1) {
      console.log(`${key} contains ${str}`);
    } else {
      console.log(`Substring not found!`);
    }
  }
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
