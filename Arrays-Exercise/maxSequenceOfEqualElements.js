function maxSequenceOfEqualElements(input) {
  //създаваме празен масив,който ще съдържа най-дългата поредица
  maxSequence = [];
  //обхождаме масива и сравняваме текущия елемент със следващия
  for (let i = 0; i < input.length; i++) {
    let currentSequence = [input[i]];
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        currentSequence.push(input[j]);
      } else {
        //ако елементите не са еднакви спираме цикъла
        break;
      }
    }
    //сравняваме максималната поредица със текущата
    //ако текущата е с по-голяма дължина максималната я приема за нова стойност
    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence;
    }
  }

  //отпечатваме масива
  console.log(maxSequence.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
