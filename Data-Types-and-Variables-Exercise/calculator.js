function calculator(number, operator, secondNumber) {
  switch (operator) {
    case "+":
      console.log((number + secondNumber).toFixed(2));
      break;
    case "-":
      console.log((number - secondNumber).toFixed(2));
      break;
    case "*":
      console.log((number * secondNumber).toFixed(2));
      break;
    case "/":
      console.log((number / secondNumber).toFixed(2));
      break;
    default:
      break;
  }
}
calculator(5, "+", 10);
calculator(25.5, "-", 3);
