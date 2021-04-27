function division(input) {
  let numb = Number(input);
  let maxDivision = 0;
  let div = [2,3,6,7,10];
  for (let i = 0; i < div.length; i++) {
      if (numb % div[i] === 0) {
          if (numb > maxDivision) {
              maxDivision = div[i];
          }
      }
      
  }
  if (maxDivision > 0) {
      console.log(`The number is divisible by ${maxDivision}`);
  }
  else {
      console.log(`Not divisible`);
  }
//   if (numb % 2 === 0) {
//     maxDivision = 2;
//   }
//   if (numb % 3 === 0) {
//     maxDivision = 3;
//   }
//   if (numb % 6 === 0) {
//     maxDivision = 6;
//   }
//   if (numb % 7 === 0) {
//     maxDivision = 7;
//   }
//   if (numb % 10 === 0) {
//     maxDivision = 10;
//   }
//   if (
//     numb % 2 !== 0 &&
//     numb % 3 !== 0 &&
//     numb % 6 !== 0 &&
//     numb % 7 !== 0 &&
//     numb % 10 !== 0
//   ) {
//     console.log('Not divisible');
//     return;
//   }
//   console.log(`The number is divisible by ${maxDivision}`);
}


division(30);
division(15);
division(12);
division(1643);
