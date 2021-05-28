function addAndRemove(input) {
  let initialValue = 1;
  let cmd;
  let result = [];
  while ((cmd = input.shift())) {
    if (cmd === "add") {
      result.push(initialValue);
      initialValue++;
    } else if (cmd === "remove") {
      result.pop();
      initialValue++;
    }
  }
  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
