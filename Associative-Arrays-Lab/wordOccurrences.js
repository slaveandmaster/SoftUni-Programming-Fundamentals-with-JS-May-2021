function wordOccurrences(input) {
  let countOccurence = (arr) =>
    arr.reduce((acc, current) => {
      acc[current] = (acc[current] || 0) + 1;
      return acc;
    }, {});
  let words = countOccurence(input);
  let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);
  for (let [word, occurence] of sorted) {
    console.log(`${word} -> ${occurence} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
