function revealWords(text, sentence) {
  let words = text.split(", ");
  let textArr = sentence.split(" ");
  let result = [];
  for (let token of textArr) {
    let replaced = false;
    for (let word of words) {
      if (token == "*".repeat(word.length)) {
        result.push(word);
        replaced = true;
      }
    }
    if (!replaced) {
      result.push(token);
    }
  }
  console.log(result.join(' '));
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
