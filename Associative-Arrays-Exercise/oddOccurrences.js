function oddOccurrences(input) {
  let words = input.split(' ').map(x => x.toLowerCase());
//   let occurance = words.reduce((acc,el) => {
//       acc[el] = (acc[el] || 0) + 1;
//       return acc
//   },new Map)
  let occurance = new Map();
  for (let item of words) {
      occurance.set(item, 0);
  }
  for (let word of words) {
      if (occurance.has(word)) {
          let currentCount = occurance.get(word);
          occurance.set(word,currentCount + 1);
      }
  }
  let result = [];
  for (let [item, value] of Array.from(occurance)) {
      if (value % 2 !=0) {
          result.push(item);
      }
  }
  console.log(result.join(' '));   
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')