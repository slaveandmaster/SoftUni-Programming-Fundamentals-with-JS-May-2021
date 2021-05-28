function rotateArray(input) {
  let rotation = Number(input.pop());
  if (isNaN(rotation)) {
    console.log("Empty");
  } else {
    for (let i = 0; i < rotation; i++) {
      input.unshift(input.pop());
    }

    console.log(input.join(" "));
  }
}
// rotateArray(["1", "2", "3", "4", "2"]);
// rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
rotateArray(["remove", "remove", "remove"]);
