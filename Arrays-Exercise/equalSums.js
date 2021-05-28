function equalSums(input) {
  isSumEqual = false;
  for (let i = 0; i < input.length; i++) {
    let sumLeft = 0;
    let sumRight = 0;
    if (i !== 0) {
    //въртим цикъл от първия елемент в масива (в ляво) докато стигнем текущото число
      for (let j = 0; j < i; j++) {
        sumLeft += input[j];
      }
    }
    if (i !== input.length - 1) {
        //въртим цикъл от текущото число до края
      for (let right = i + 1; right < input.length; right++) {
        sumRight += input[right];
      }
    }
    //срявнявам сумите и ако те са равни променява на флаг true и отпечатваме индекса на числото
    if (sumLeft === sumRight) {
      isSumEqual = true;
      console.log(i);
    }
  }
  if (!isSumEqual) {
    console.log("no");
  }
}
// equalSums([1, 2, 3, 3]);
// equalSums([1, 2]);
// equalSums([1]);
// equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
