function wordTracker(input) {
  //     let searchWord = input.shift().split(' ');
  //     let filtered = input.filter((x) => { return searchWord.includes(x) }).reduce((acc,el) => {
  //         acc[el] = (acc[el] || 0) + 1;
  //         return acc;
  //     },{});
  //     let sorted = Object.entries(filtered).sort((a,b)=> {
  //        return b[1] - a[1];
  //     })
  //    for (let [ word , count ] of sorted) {
  //        console.log(`${word} - ${count}`);
  //    }
  let words = {};
  let searchWords = input.shift().split(" ");
  for (let item of searchWords) {
    words[item] = 0;
  }
  for (let word of input) {
    if (words.hasOwnProperty(word)) {
      let currentOccurence = words[word];
      words[word] = currentOccurence + 1;
    }
  }
  let sorted = Object.entries(words).sort((a, b) => {
    return b[1] - a[1];
  });
  for (let [word, count] of sorted) {
    console.log(`${word} - ${count}`);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
