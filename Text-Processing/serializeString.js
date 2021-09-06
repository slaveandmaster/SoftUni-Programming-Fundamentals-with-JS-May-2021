function solve(str) {
  str = str[0].split('');
  let letters = {};
  for (let i = 0; i < str.length; i++) {
    if (!letters.hasOwnProperty(str[i])) {
      letters[str[i]] = [];
      letters[str[i]].push(i);
    } else {
      letters[str[i]].push(i);
    }
  }
  let result = Object.entries(letters);
  for (const [item, count] of result) {
      console.log(`${item}:${count.join('/')}`)
  }
}
solve(["abababa"]);