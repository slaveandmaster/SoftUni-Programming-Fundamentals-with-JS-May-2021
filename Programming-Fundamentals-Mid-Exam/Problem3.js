function solve(input) {
  let history = [];
  line = input.shift();

  while (line != "end") {
    let [cmd, ...items] = line.split(" ");
    switch (cmd) {
      case "Chat":
        chat(items[0]);
        break;
      case "Delete":
        del(items[0]);
        break;
      case "Edit":
        edit(items[0], items[1]);
        break;
      case "Pin":
        pin(items[0]);
        break;
      case "Spam":
        spam(items);
        break;
      default:
        break;
    }
    line = input.shift();
  }
  function chat(msg) {
    history.push(msg);
  }
  function del(msg) {
    if (history.includes(msg)) {
      let idx = history.indexOf(msg);
      history.splice(idx, 1);
    }
  }
  function edit(msg, editMsg) {
    for (let index = 0; index < history.length; index++) {
      if (history[index] == msg) {
        history[index] = editMsg;
      }
    }
  }
  function pin(msg) {
    if (history.includes(msg)) {
      let idx = history.indexOf(msg);
      history.push(history.splice(idx, 1));
    }
  }
  function spam(messages) {
    for (let index = 0; index <= messages.length - 1; index++) {
      history.push(messages[index]);
    }
  }
  console.log(history.join("\n"));
}
solve([
  "Chat Hello",
  "Chat darling",
  "Edit darling Darling",
  "Spam how are you",
  "Delete Darling",
  "end",
]);
solve([
  "Chat John",
  "Spam Let's go to the zoo",
  "Edit zoo cinema",
  "Chat tonight",
  "Pin John",
  "end",
]);
