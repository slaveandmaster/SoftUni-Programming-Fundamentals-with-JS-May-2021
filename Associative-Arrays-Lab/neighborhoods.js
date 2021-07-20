function neighborhoods(input) {
  let neighbors = new Map();
  let listNeighbors = input.shift().split(", ");
  for (let item of listNeighbors) {
    neighbors.set(item, []);
  }
  for (let line of input) {
    let [neighbor, name] = line.split(" - ");
    if (neighbors.has(neighbor)) {
      neighbors.get(neighbor).push(name);
    }
  }
  let sorted = Array.from(neighbors).sort((a, b) => {
    return b[1].length - a[1].length;
  });
  for (let [name, arr] of sorted) {
    console.log(`${name}: ${arr.length}`);
    arr.forEach((x) => console.log(`--${x}`));
  }
}
neighborhoods([
  "Abbey Street, Herald Street, Bright Mews",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Billy",
]);
