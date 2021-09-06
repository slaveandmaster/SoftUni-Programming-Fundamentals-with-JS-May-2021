function solve(text) {
  let words = text.split(/\s+/);
  let sum = 0;
  let upperCaseLetters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let lowerCaseLetters = Array.from("abcdefghijklmnopqrstuvwxyz");
  
  for (let i = 0; i < words.length; i++) {
    let textStr = words[i];
    let firstLetter = textStr[0];
    let lastLetter = textStr[textStr.length - 1];
    let middleNumber = Number(textStr.substr(1, textStr.length - 1 - 1));
    //check letter
    if (upperCaseLetters.includes(firstLetter)) {
      let position = upperCaseLetters.indexOf(firstLetter) + 1;
      sum += middleNumber / position;
    } else if (lowerCaseLetters.includes(firstLetter)) {
      let position = lowerCaseLetters.indexOf(firstLetter) + 1;
      sum += middleNumber * position;
    }

    if (upperCaseLetters.includes(lastLetter)) {
      let position = upperCaseLetters.indexOf(lastLetter) + 1;
      sum -= position;
    } else if (lowerCaseLetters.includes(lastLetter)) {
      let position = lowerCaseLetters.indexOf(lastLetter) + 1;
      sum += position;
    }
  }
  console.log(sum.toFixed(2));
}
solve("A12b s17G");
solve("P34562Z q2576f   H456z");
solve("a1A");
