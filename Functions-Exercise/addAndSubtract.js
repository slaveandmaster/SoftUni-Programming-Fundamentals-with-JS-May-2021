function addAndSubtract(a,b,c) {
    let sum = (a,b) => a + b;
    let subtract = (res,c) =>  res - c;
    let result = sum(a,b);
    console.log(subtract(result,c));
}
addAndSubtract(23,6,10);