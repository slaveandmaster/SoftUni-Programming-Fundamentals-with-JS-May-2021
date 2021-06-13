function bombNumbers(numbers, specialNumbers) {
  let sum = 0;
  let searchFor = specialNumbers[0];
  let bombPower = specialNumbers[1];
  let line;
  while((line = numbers.indexOf(searchFor)) > -1) {
      //left currentIndex - power
      //right currentIndex, power
     
      numbers.splice(line,bombPower); //3 , 2 -> 2,2
      numbers.splice(Math.max(line - bombPower,0),bombPower + 1); //bombpower + 1 заради премахнатото бомба число
  }
  console.log(numbers.reduce((acc,current) => { return acc + current},0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
