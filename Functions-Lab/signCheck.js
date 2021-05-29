function signCheck(numberOne, numberTwo, numberThree) {
  if (numberOne >= 0 && numberTwo >= 0 && numberThree >= 0) {
    console.log("Positive");
  } else if (numberOne < 0 && numberTwo < 0 && numberThree >= 0) {
    console.log("Positive");
  } else if (numberOne < 0 && numberTwo < 0 && numberThree < 0) {
    console.log("Negative");
  } else if (numberOne < 0 && numberTwo >= 0 && numberThree >= 0) {
    console.log("Negative");
  } else if (numberOne >= 0 && numberTwo < 0 && numberThree >= 0) {
    console.log("Negative");
  } else if (numberOne >= 0 && numberTwo < 0 && numberThree < 0) {
    console.log("Positive");
  } else if (numberOne >= 0 && numberTwo >= 0 && numberThree < 0) {
    console.log("Negative");
  } else if (numberOne < 0 && numberTwo >= 0 && numberThree < 0) {
    console.log("Positive");
  }
}

signCheck(5, 12, -15); //(+ - +)    (- - -)    (+ + +)      (-+-)  (--+)   (+--)  (++-)  (-++)
signCheck(-6, -12, 4);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
