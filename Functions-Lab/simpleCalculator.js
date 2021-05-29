function simpleCalculator(numberOne, numberTwo, operator) {
  switch (operator) {
    case "multiply":
        let multiply = (a, b) => a * b;
        console.log(multiply(numberOne,numberTwo));
      break;
    case "divide":
        let divide = (a, b) => a / b;
        console.log(divide(numberOne,numberTwo));
      break;
    case "add":
        let add = (a, b) => a+ b;
        console.log(add(numberOne,numberTwo));
      break;
    case "subtract":
        let subtract = (a, b) => a - b;
        console.log(subtract(numberOne,numberTwo));
      break;
    default:
      break;
  }
}

simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");
