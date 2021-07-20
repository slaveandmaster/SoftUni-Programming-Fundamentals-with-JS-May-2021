function theLift(input) {
  let peoples = Number(input.shift());
  let cabins = input.toString().split(" ").map(Number);
  let result = [];
  let isFull = false;
  for (let cab of cabins) {
    if (peoples >= 0) {
      let addNew = 4 - cab;
      if (peoples < 4 && peoples < addNew) {
        cab += peoples;
        peoples -= peoples;
        result.push(cab);
        isFull = false;
      } else {
        cab += addNew;
        result.push(cab);
        peoples -= addNew;
        isFull = true;
      }
    }
  }
  let totalPeoples = result.reduce((acc, current) => acc + current, 0);
  let maxCapacity = cabins.length * 4 - cabins.reduce((p, c) => p + c, 0);
  if (peoples == 0 && totalPeoples < maxCapacity) {
    console.log(`The lift has empty spots!`);
    console.log(result.join(" "));
  } else if (peoples > 0 && isFull == true) {
    console.log(`There isn't enough space! ${peoples} people in a queue!`);
    console.log(result.join(" "));
  } else if (isFull == true && peoples == 0) console.log(result.join(" "));
}
theLift(["15", "0 0 0 0"]);
theLift(["20", "0 2 0"]);
