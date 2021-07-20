function buyCookies(input) {
  let biscuitsList = input.shift().split(", ");
  let commands = input.shift();

  while (commands !== "No More Money") {
    let token = commands.split(' ');
    let command = token[0];
     let item = token[1];

    switch (command) {
      case "OutOfStock":
        for (let i = 0; i <= biscuitsList.length - 1; i++) {
          if (biscuitsList[i] == item) {
            let idx = biscuitsList.indexOf(item);
            biscuitsList[idx] = "None";
          }
        }
        break;
      case "Required":
        let index = Number(token[2]);
        if (index >= 0 && index < biscuitsList.length) {
          if (biscuitsList[index] != "None") {
            biscuitsList.splice(index, 1, item);
                //biscuitsList[index] = item;
          }
        }
        break;
      case "Last":
        biscuitsList.push(item);
        break;
    }
    commands = input.shift();
  }
  let filtered = biscuitsList.filter((x) => x != "None");
  console.log(filtered.join(' '));
  //console.log(biscuitsList.join(" "));
}
buyCookies(["Vanilla, Chocolate, Raspberry, Chocolate",
"OutOfStock Chocolate",
"Required BBB 3",
"No More Money"
]);
buyCookies(["Vanilla, Chocolate, Raspberry, Vegan",
"Required SB 3",
"OutOfStock Walnuts",
"No More Money"
]);
buyCookies(["Raspberry, Raspberry, Ordinary",
"Last Chocolate",
"Required Vegan 4",
"No More Money"
]);