function addOrSubtract(input) {
  let originalArr = input.slice(0);
  let arr = input;
  let sumOld = 0;
  let sumNew = 0;
  arr.map((x, index,arr) => {
    if (x % 2 === 0) {
      x += index;
      arr[index] = x;
    } else {
      x -= index;
      arr[index] = x;
      
    }
  });
  console.log(arr);
  sumNew = input.reduce((acc,item) => {return acc + item},0);
  sumOld = originalArr.reduce((acc,item) => {return acc + item},0);
  console.log(sumOld);
  console.log(sumNew);
}
addOrSubtract([5, 15, 23, 56, 35]);
addOrSubtract([-5, 11, 3, 0, 2]);
