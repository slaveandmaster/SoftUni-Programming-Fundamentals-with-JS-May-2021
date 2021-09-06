function secretChat(input) {
  let secret = input.shift();
  let actions = {
    InsertSpace,
    Reverse,
    ChangeAll,
  };

  while (input[0] != "Reveal") {
    let tokens = input.shift().split(":|:");
    let [command, ...params] = tokens;
    actions[command](params);
    // console.log(secret)
  }
  console.log(`You have a new text message: ${secret}`);
  function InsertSpace(idx) {
    // secret = secret.split('').splice(idx,0,' ').join('');
    let beforeSpace = secret.substring(0, Number(idx));
    let spaceStr = " ";
    let afterSpace = secret.substring(Number(beforeSpace.length - 1 + 1));
    secret = beforeSpace + spaceStr + afterSpace;
    console.log(secret);
  }
  function Reverse([str]) {
    let match = secret.indexOf(str);
    if (match > -1) {
      let idx = Number(secret.indexOf(str));
      let firstPart = secret.substring(0, idx);
      let cutStr = secret.substring(idx, idx + str.length).split("").reverse().join("");
      let lastPart = secret.substring(idx + str.length);
      secret = firstPart + lastPart + cutStr;
      console.log(secret);
    } else {
      console.log(`error`);
    }
  }
  function ChangeAll([str, replacement]) {
    let match = secret.indexOf(str);
    while (match > -1) {
      secret = secret.replace(str, replacement);
      match = secret.indexOf(str);
    }
    console.log(secret);
  }
  
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
