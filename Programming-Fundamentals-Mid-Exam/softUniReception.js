function softUniReception(input) {
  let peoples = Number(input.pop());
  let efficiently = input
    .map(Number)
    .reduce((acc, current) => acc + current, 0);
  let hours = 0;
  while (peoples > 0) {
    hours++;
    if (hours % 4 == 0) {
      continue;
    }
    peoples -= efficiently;
  }
  console.log(`Time needed: ${hours}h.`);
}
softUniReception(["5", "6", "4", "20"]);
softUniReception(["1", "2", "3", "45"]);
